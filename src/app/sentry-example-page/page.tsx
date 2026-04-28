"use client";

import Head from "next/head";
import * as Sentry from "@sentry/nextjs";

export default function Page() {
  return (
    <div>
      <Head>
        <title>Sentry Onboarding</title>
        <meta name="description" content="Test Sentry for your Next.js app!" />
      </Head>

      <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <h1>Sentry Test Page</h1>
        <p>Click the button below to trigger an error and verify Sentry tracking.</p>

        <button
          onClick={() => {
            // @ts-ignore - this function intentionally does not exist to trigger an error
            myUndefinedFunction();
          }}
          style={{
            padding: "12px 24px",
            backgroundColor: "#4c2a85",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            marginTop: "1rem"
          }}
        >
          Throw error!
        </button>
      </main>
    </div>
  );
}
