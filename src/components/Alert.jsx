import React from "react";

const Alert = () => {
  return (
    <div className="flex flex-col mt-8 ">
      <h1 className="text-3xl font-bold mb-4 ml-4">Alert</h1>{" "}
      <div className="flex flex-col  justify-around bg-blue-300 shadow-sm rounded-3xl p-4">
        <h1 className="text-xl font-bold">Small Craft Advisory</h1>
        <div className="flex justify-between mt-4">
          <h2>Start Date: [Add start date here]</h2>
          <h2>End Date: [Add end date here]</h2>
        </div>
        <p className="mt-4">
          A Small Craft Advisory is in effect. This advisory indicates that
          conditions are potentially hazardous to small boats and inexperienced
          mariners in or near the specified area. During this period, you should
          exercise caution and avoid venturing out to sea if you are operating a
          small craft.
        </p>
        <p className="mt-2">
          [Add any additional information or details about the specific advisory
          here.]
        </p>
        <p className="mt-2 font-bold">
          For more information and updates, please refer to the official sources
          or contact the local authorities.
        </p>
        <span className="mt-4 text-sm">
          Issued by: [Add issuing authority's name]
        </span>
      </div>
    </div>
  );
};

export default Alert;
