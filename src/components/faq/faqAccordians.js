import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";

const FaqAccordians = () => {
  const [activeKey, setActiveKey] = useState("0");

  const handleAccordionSelect = (selectedKey) => {
    setActiveKey(selectedKey);
  };

  return (
    <div>
      <div className="faq-accordians d-flex v-center h-center flex-column">
        <div className="top d-flex v-center h-center">
          <h3>1. FAQ Accordion V1</h3>
        </div>
        <div className="bottom d-flex v-center h-center">
          <Accordion
            defaultActiveKey="0"
            activeKey={activeKey}
            onSelect={handleAccordionSelect}
            flush
          >
            {[0, 1, 2, 3].map((itemKey) => (
              <Accordion.Item
                key={itemKey}
                eventKey={itemKey.toString()}
                style={{
                  border:
                    activeKey === itemKey.toString()
                      ? "2px solid #00CDAC"
                      : "none",
                  boxShadow:
                    activeKey === itemKey.toString()
                      ? "0px 6px 16px 0px rgba(0, 205, 172, 0.50)"
                      : "none",
                }}
              >
                <Accordion.Header>
                  {itemKey === 0
                    ? "What is Webflow and why is it the best website builder?"
                    : itemKey === 1
                    ? "What is your favorite template from BRIX Templates?"
                    : itemKey === 2
                    ? "How do you clone a Webflow Template from the Showcase?"
                    : "Why is BRIX Templates the best Webflow agency out there?"}
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FaqAccordians;
