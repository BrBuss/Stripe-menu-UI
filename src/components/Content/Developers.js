import React from "react";

import { DevelopersWrapper } from "./styles";

export const Developers = () => (
  <DevelopersWrapper>
    <div className="primary">
      <span className="documentation" />

      <div>
        <h3>Documentation</h3>
        <p>Start integrating Stripe’s products and tools</p>

        <div>
          <ul>
            <li>
              <h4>Get started</h4>
            </li>
            <li>Prebuilt checkout</li>

            <li> Libraries and SDKs</li>
            <li>Plugins</li>
            <li>Code samples</li>
          </ul>

          <ul>
            <li>
              <h4>Gudes</h4>
            </li>
            <li>Accept online payments</li>

            <li>Manage subscriptions</li>
            <li>Send payments</li>
            <li>Set up in-person payments</li>
          </ul>
        </div>
      </div>
    </div>

    <ul className="secondary">
      <li>
        <span className="api-reference" />
        Full API reference
      </li>
      <li>
        <span />
        API Status
      </li>
      <li>
        <span />
        Open source
      </li>
    </ul>
  </DevelopersWrapper>
);
