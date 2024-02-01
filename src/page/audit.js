import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import ScrollToTop from "../components/shared/scrollToTop";
import Portfoliobanner from "../components/portfolio/portfoliobanner";

const Audit = () => {
  ScrollToTop();

  useEffect(() => {
    const script1 = document.createElement("script");
    script1.defer = true;
    script1.src =
      "https://online.seranking.com/frontend-dist/widget-manager/main.js";

    const script2 = document.createElement("script");
    script2.defer = true;
    script2.src =
      "https://online.seranking.com/frontend-dist/Widgets/js/main.js";
    script2.setAttribute("data-widget-type", "modal");
    script2.setAttribute("data-auto-open-time", "0");
    script2.setAttribute("data-widget-page-audit-id", "3093869-2917");
    setTimeout(() => {
      document.body.appendChild(script1);
      document.body.appendChild(script2);
    }, 3000);

    // Clean up the scripts when the component unmounts
    // return () => {
    //   document.body.removeChild(script1);
    //   document.body.removeChild(script2);
    // };
  }, []);
  return (
    <div>
      <Portfoliobanner
        heading="SEO Audit"
        para="Unlock Your SEO Potential and Attract the Perfect Customers and High-Value Leads from Google."
      />
      <div className="audit">
        <div className="content">
          <div className="bottom d-flex v-center h-center">
            <ol>
              <li>
                Begin by adding the specific web page URL you’d like to audit.
              </li>
              <li>
                Carefully input the targeted keyword or phrase for which you aim
                to optimize the page’s ranking. Remember, it’s crucial to select
                only one precise keyword or phrase, like “Junk Removal” or “Junk
                Removal Company”. Avoid entering a multitude of keywords such as
                “Junk Removal Hauling Services Minneapolis Minnesota”.
              </li>
              <li>
                Drop in your contact details, and then run the audit process and
                discover powerful insights!
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audit;
