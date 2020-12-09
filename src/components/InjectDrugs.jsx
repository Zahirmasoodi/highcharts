import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Container } from "reactstrap";

const InjectDrugs = () => {
  const options = {
    yAxis: [
      {
        height: "75%",
        labels: {
          align: "right",
          x: -3,
        },
        title: {
          text: "",
        },
      },
      {
        top: "75%",
        height: "25%",
        labels: {
          align: "right",
          x: -3,
        },
        offset: 0,
        title: {
          text: "",
        },
      },
    ],
    title: {
      text: "STATE WISE DETAILS OF PEOPLE WHO DO DRUGS",
    },
    xAxis: {
      categories: [
        "JAMMU & KASHMIR",
        "HIMACHAL PRADESH",
        "PUNJAB",
        "CHANDIGARH",
        "UTIARAKHAND",
        "HARYANA",
        "DELHI",
        "RAJASTHAN",
        "UTTAR PRADESH",
        "BIHAR",
        "WEST BENGAL",
        "JHRKHAND",
        "ODISHA",
        "CHHATTISGARH",
        "MADHYA PRADESH",
        "GUJARAT",
        "DAMAN & DIU",
        "DADRA & NAGAR HAVELI",
        "MAHARASHTRA",
        "ANDHRA PRADESH",
        "KARNATAKA",
        "GOA",
        "LAKSHADWEEP",
        "KERALA",
        "TAMIL NADU",
        "PUDUCHERRY",
        "ANDA MAN & NICOBAR ISLANDS",
      ],
    },

    series: [
      {
        data: [
          25098,
          4004,
          88165,
          1500,
          6216,
          55358,
          86909,
          4522,
          100113,
          16933,
          4336,
          8580,
          33888,
          34344,
          28288,
          11544,
          11420,
          17466,
          17136,
          20592,
          8184,
          12928,
          9792,
          0,
          0,
          0,
          44323,
          69916,
          44530,
          2299,
          0,
          19095,
          2773,
          44,
          0,
        ],
        name: "Number of People who Inject Drugs",
      },
    ],
  };
  return (
    <HighchartsReact
      containerProps={{ style: { height: "85vh" } }}
      highcharts={Highcharts}
      options={options}
    />
  );
};

export default InjectDrugs;
