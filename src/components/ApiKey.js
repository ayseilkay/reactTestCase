import React from "react";
import Icon from "../Icon";

function ApiKey() {
  return (
    <div>
      <div>
        <input
          className="mt-64 w-80 h-12 rounded-lg text-gray-700 appearance-none border-2 px-4 font-semibold"
          type={"text"}
          placeholder="Api anahtarını yazınız."
        ></input>
      </div>
      <div className="flex justify-center items-center p-3">
        <div className="px-1">
          <Icon name={"exclamation"} size={24} />
        </div>
        <div>
          {" "}
          <span className="text-xs">
            Devam etmek için lütfen <strong>openweathermap.org</strong>{" "}
            adresinden aldığınız API anahtarınızı belirtin.
          </span>
        </div>
      </div>
    </div>
  );
}

export default ApiKey;
