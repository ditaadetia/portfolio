import React from "react";

export default function ExperienceDetail({
  jobTitle,
  companyName,
  startDate,
  endDate,
  jobDescription,
}) {
  return (
    <div className="mb-5">
      <div className="flex justify-between row">
        <div className="text-2xl font-semibold col-9">{jobTitle}</div>
        <div className="text-red-500 col-3">
          {startDate} - {endDate}
        </div>
      </div>
      <div className="text-xl text-gray-500 font-medium mt-1 mb-3">
        {companyName}
      </div>
      <div className="text-gray-500 w-[75%] text-32">{jobDescription}</div>
    </div>
  );
}