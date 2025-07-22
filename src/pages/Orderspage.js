import React, { useState } from "react";
import "./Orderpage.css";
import RealTimeChart from "../components/RealTimeChart";
import { Package, Eye, Truck, Users } from "lucide-react";

const OrdersPage = () => {
  const [activeTab, setActiveTab] = useState("Checkout");
  const [range, setRange] = useState("3 Months");
  const [customDate, setCustomDate] = useState("");

  const isCustom = range === "Custom Date";
  const chartRange = isCustom && customDate ? customDate : range;

  const orders = {
    Checkout: [
      {
        no: 1,
        id: "#2738299",
        name: "Nelson Mandel",
        date: "10 Feb 2022",
        cost: "$280.00",
        shipping: "$10.00",
        status: "Pending",
      },
      {
        no: 2,
        id: "#1273182",
        name: "Hanivan Muhammad",
        date: "10 Feb 2022",
        cost: "$180.00",
        shipping: "$2.00",
        status: "Pending",
      },
    ],
    OnProcess: [
      {
        no: 3,
        id: "#1423192",
        name: "Ayesha Khan",
        date: "11 Feb 2022",
        cost: "$300.00",
        shipping: "$5.00",
        status: "Processing",
      },
    ],
    OnDelivery: [
      {
        no: 4,
        id: "#1481920",
        name: "Dana Sulaiman",
        date: "12 Feb 2022",
        cost: "$580.00",
        shipping: "$3.00",
        status: "Success",
      },
    ],
  };

  return (
    <div className="orders-page">
      {/* === Top Metrics === */}
      <div className="top-metrics">
        <div className="card orange">
          <Package size={30} />
          Total Orders<br />
          <span>3202</span>
        </div>
        <div className="card purple">
          <Eye size={30} />
          Visitors<br />
          <span>1237</span>
        </div>
        <div className="card green">
          <Truck size={30} />
          Total Delivery<br />
          <span>4256</span>
        </div>
        <div className="card blue">
          <Users size={30} />
          Total Customers<br />
          <span>5261</span>
        </div>
      </div>

      {/* === Middle Section === */}
      <div className="middle-section">
        {/* Row 1: Sales Chart */}
        <div className="sales-row">
          <div className="sales-section">
            <div className="sales-header">
              <h3>Total Sales</h3>
              <div className="sales-controls">
                <button className="download-btn">Download PDF</button>
                <select
                  className="filter-dropdown"
                  value={range}
                  onChange={(e) => setRange(e.target.value)}
                >
                  <option>Last 9 Days</option>
                  <option>Last Month</option>
                  <option>3 Months</option>
                  <option>6 Months</option>
                  <option>12 Months</option>
                  <option>Last Year</option>
                  <option>Custom Date</option>
                </select>
                {isCustom && (
                  <input
                    type="date"
                    value={customDate}
                    onChange={(e) => setCustomDate(e.target.value)}
                    style={{
                      marginLeft: "10px",
                      padding: "6px 10px",
                      borderRadius: "6px",
                      border: "1px solid #ccc",
                    }}
                  />
                )}
              </div>
            </div>

            <div className="sales-stats">
              <p>New Orders: <strong>239</strong></p>
              <p>Revenue (Last Month): <strong>$3,499.00</strong></p>
              <p>Average Revenue: <strong>$2,168.00</strong></p>
            </div>

            <div className="chart-wrapper">
              <RealTimeChart range={chartRange} />
            </div>
          </div>
        </div>

        {/* Row 2: Visitors & Target */}
        <div className="visitor-row">
          {/* Visitors Box */}
          <div className="right-box">
            <h4>Visitors</h4>
            <p className="visitors-count">43,292</p>
            <img
              src="https://quickchart.io/chart?c={type:'bar',data:{labels:['Direct','Social'],datasets:[{label:'Visitors',data:[21964,21328]}]}}"
              alt="Visitors Chart"
              className="fake-chart"
            />
          </div>

          {/* === UPDATED Target Box === */}
          <div className="right-box target-box">
            <div className="target-details">
              <p className="target-title">Ordered Target in<br />This Period</p>
              <p className="target-number">
                1.239<br />
                <span className="sub">/ 3.290 Target</span>
              </p>
            </div>
            <div className="target-graph">
              <svg width="60" height="60">
                <circle
                  cx="30"
                  cy="30"
                  r="26"
                  stroke="#fff"
                  strokeWidth="6"
                  fill="transparent"
                  opacity="0.3"
                />
                <circle
                  cx="30"
                  cy="30"
                  r="26"
                  stroke="#fff"
                  strokeWidth="6"
                  fill="transparent"
                  strokeDasharray={2 * Math.PI * 26}
                  strokeDashoffset={(1 - 0.7) * 2 * Math.PI * 26}
                  strokeLinecap="round"
                />
              </svg>
              <span className="progress-text">70%</span>
            </div>
          </div>
        </div>
      </div>

      {/* === Order Table === */}
      <div className="order-list">
        <h3>Order List</h3>
        <div className="order-tabs">
          {Object.keys(orders).map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Order ID</th>
              <th>Orderer Name</th>
              <th>Date</th>
              <th>Cost</th>
              <th>Shipping Cost</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders[activeTab].map((order) => (
              <tr key={order.id}>
                <td>{order.no}</td>
                <td>{order.id}</td>
                <td>{order.name}</td>
                <td>{order.date}</td>
                <td>{order.cost}</td>
                <td>{order.shipping}</td>
                <td>
                  <span className={`status ${order.status.toLowerCase()}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* === Shipping Section === */}
      <div className="shipping-section">
        <h3>Upcoming Shipping</h3>
        <div className="shipping-card">
          <p>Order ID: <strong>#2738299</strong></p>
          <p>📍 Jakarta - <strong>10 Feb 2022</strong></p>
          <p>📍 Singapore - <strong>15 Feb 2022</strong></p>
        </div>
        <div className="shipping-card">
          <p>Order ID: <strong>#1481920</strong></p>
          <p>📍 Jakarta - <strong>20 Feb 2022</strong></p>
          <p>📍 Tokyo - <strong>22 Feb 2022</strong></p>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
