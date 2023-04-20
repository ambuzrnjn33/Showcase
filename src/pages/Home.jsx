import React, { Suspense, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { ErrorBoundary } from "react-error-boundary";
import {
  Amazing,
  ErrorFallback,
  Hero,
  Layout,
  WorksAndQuotes,
} from "../components";
import Chat from "../components/ChatFile/Chat";
import CustomerReview from "../components/CustomerReview";
import DummyVideos from "../components/DummyVideos";
import Services from "../components/Services";
import Stores from "../components/Stores";
import Trusted from "../components/Trusted";

const Home = () => {
  const [cookies, removeCookie] = useCookies(["token"]);

  return (
    <Layout>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          // reset the state of your app so the error doesn't happen again
        }}
      >
        <Suspense
          fallback={
            <div>
              <p className="text-center py-5">Loading...</p>
            </div>
          }
        >
          <Hero />
        </Suspense>
      </ErrorBoundary>
      <DummyVideos />
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          // reset the state of your app so the error doesn't happen again
        }}
      >
        <Suspense
          fallback={
            <div>
              <p className="text-center py-5">Loading...</p>
            </div>
          }
        >
          <section>
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onReset={() => {
                // reset the state of your app so the error doesn't happen again
              }}
            >
              <Suspense
                fallback={
                  <div>
                    <p className="text-center py-5">Loading...</p>
                  </div>
                }
              >
                <Amazing />
              </Suspense>
            </ErrorBoundary>
            <Stores />
            <WorksAndQuotes />
            <Services />
            <Trusted />
            {/* <Count /> */}
            {/* <GetStarted /> */}
            <CustomerReview />
          </section>
          {cookies?.token !== "undefined" && <Chat />}
        </Suspense>
      </ErrorBoundary>
    </Layout>
  );
};

export default Home;
