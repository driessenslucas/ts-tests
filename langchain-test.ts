import { Ollama } from "@langchain/ollama";

try {
  const llm = new Ollama({
    model: "deepseek-r1:14b",
    temperature: 0.7,
  });

  try {
    await llm.invoke("hello!");
    console.log("LLM connection successful");
  } catch {
    throw new Error("LLM connection failed");
  }

  try {
    const inputText: string = "tell me a joke";

    const stream = await llm.stream(inputText);

    let insideThinking: boolean = false;

    for await (const item of stream) {

      if (item.includes("<think>")) {
        insideThinking = true;
      }

      if (item.includes("</think>")) {
        insideThinking = false;
        const parts = item.split("</think>");
        const afterThink = parts.slice(1).join(" ") ?? "";
        process.stdout.write(afterThink);
      }
      else if (insideThinking) {
        //
      }
      else {
        process.stdout.write(item);
      }



    }
  } catch (error: unknown) {
    process.stdout.write("\n LLM FAILED :(")
    console.error("streaming stopped");
    console.debug(error);
  }
} catch (error: unknown) {
  console.error("Could not initialize the llm.");
  console.debug(error);
}

