export const HtmlCode = () => {
  return (
    <pre
      style={{
        textAlign: "left",
        opacity: 0.2,
        width: "100%",
        lineHeight: "3",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word",
        margin: "0",
        overflowX: "hidden",
      }}
    >
      <code>
        &lt;<span style={{ color: "blueviolet" }}>html</span>{" "}
        <span style={{ color: "darkgoldenrod" }}>lang</span>="en"&gt;
        <br />
        &nbsp;&nbsp;&lt;<span style={{ color: "blueviolet" }}>head</span>{" "}
        <span style={{ color: "darkgoldenrod" }}>name</span>="viewport"{" "}
        <span style={{ color: "darkgoldenrod" }}>content</span>="device-width"
        initial-scale="1.0"&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;
        <span style={{ color: "blueviolet" }}>title</span>&gt; What I do for
        work &lt;/<span style={{ color: "blueviolet" }}>title</span>&gt;
        <br />
        &nbsp;&nbsp;&lt;/<span style={{ color: "blueviolet" }}>head</span>&gt;
        <br />
        &nbsp;&nbsp;&lt;<span style={{ color: "blueviolet" }}>body</span>&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;
        <span style={{ color: "blueviolet" }}>h1</span>&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Frontend development is really
        exciting!
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/
        <span style={{ color: "blueviolet" }}>h1</span>&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;
        <span style={{ color: "blueviolet" }}>p</span>&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Maybe I should learn more about
        mobile app and backend development too.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/
        <span style={{ color: "blueviolet" }}>p</span>&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;
        <span style={{ color: "blueviolet" }}>p</span>&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Oops! Almost forgot to say "Hello
        World!"
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/
        <span style={{ color: "blueviolet" }}>p</span>&gt;
        <br />
        &nbsp;&nbsp;&lt;/<span style={{ color: "blueviolet" }}>body</span>&gt;
        <br />
        &lt;/<span style={{ color: "blueviolet" }}>html</span>&gt;
        <br />
      </code>
    </pre>
  );
};
