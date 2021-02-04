import React from "react";

import { CompanyWrapper } from "./styles";

export const Company = () => (
  <CompanyWrapper>
    <ul className="primary">
      <li>
        <span />
        About stripe
      </li>
      <li>
        <span />
        Customers
      </li>
      <li>
        <span />
        Enterprise
      </li>
      <li>
        <span />
        Partners
      </li>
      <li>
        <span />
        Jobs
      </li>
      <li>
        <span />
        Environment
      </li>
      <li>
        <span />
        Newsroom
      </li>
    </ul>
    <ul className="secondary">
      <li className="title">
        <span className="title-icon" />
        Do blog
      </li>
      <li>
        Payouts with no code required
        <span className="new-tag">Novo</span>
        <span className="arrow">{">"}</span>
      </li>
      <li>
        Introducing the Billing customer portal
        <span className="arrow">{">"}</span>
      </li>
      <li>
        Online bank transfers through FPX are now...
        <span className="arrow">{">"}</span>
      </li>
    </ul>
  </CompanyWrapper>
);
