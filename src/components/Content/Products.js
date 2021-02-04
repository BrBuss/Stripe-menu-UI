import React from "react";

import { ProductsWrapper } from "./styles";

export const Products = () => (
  <ProductsWrapper>
    <ul className="primary">
      <li>
        <span className="payments" />

        <div>
          <h3>Payments</h3>
          <p>Online payments</p>
        </div>
      </li>
      <li>
        <span className="billing" />

        <div>
          <h3>Billing</h3>
          <p>Subscriptions & invoicing</p>
        </div>
      </li>
      <li>
        <span className="connect" />

        <div>
          <h3>Connect</h3>
          <p>Payments for platforms</p>
        </div>
      </li>
    </ul>

    <ul className="secondary">
      <li>
        <span className="sigma" />

        <h3>Sigma</h3>
        <p>Custom reports</p>
      </li>
      <li>
        <span className="atlas" />

        <h3>Atlas</h3>
        <p>Startup incorporation</p>
      </li>
      <li>
        <span className="radar" />

        <h3>Radar</h3>
        <p>Fraud & risk management with machine learning</p>
      </li>
      <li>
        <span className="issuing" />

        <h3>Issuing</h3>
        <p>Card creation</p>
      </li>
      <li>
        <span className="terminal" />

        <h3>Terminal</h3>
        <p>In-person payments</p>
      </li>
    </ul>
  </ProductsWrapper>
);
