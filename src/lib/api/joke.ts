export async function fetchJoke(): Promise<string> {
    const response = await fetch(
        "https://v2.jokeapi.dev/joke/Any?type=single&blacklistFlags=nsfw,religious,political,racist,sexist,explicit",
    );
    if (!response.ok) {
        throw new Error(`JokeAPI request failed: ${response.status}`);
    }
    const data = await response.json();
    if (data.error || typeof data.joke !== "string") {
        throw new Error("Unexpected joke response shape");
    }
    return data.joke;
}
