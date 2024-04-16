import Form from "../components/form";

export default function Home() {
  return (
    <div>
      <Form
        id="76"
        name="76ers Fan Survey"
        inputs={[
          ["email", "email", "", []],
          ["name", "short", "", []],
          [
            "Favourite NBA team",
            "menu",
            "",
            ["Philidelphia", "Philly", "76ers", "Sixers"],
          ],
          [
            "How likely are the 76ers to win the 2024 NBA Championship?",
            "slider",
            "",
            ["100", "1000", "150", "%", "num"],
          ],
          [
            "Explain in 1000 words why Philly will win the 2024 NBA Championship",
            "long",
            "Start typing here...",
            [],
          ],
        ]}
      />
    </div>
  );
}
