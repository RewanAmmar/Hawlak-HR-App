import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Home.scss";
import { NavLink } from "react-router-dom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { authActions } from '../../store/AuthSlice';
import { useDispatch } from "react-redux";
export default function Home() {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const dispatch = useDispatch();
  const logoutHandler = async () => {
    dispatch(authActions.logout());
  };
 const data = {
  labels: ['Companies', 'Branches', 'Departments', 'Employees'],
  datasets: [
    {
      label: '# of Votes',
      data: [4, 8, 10, 12],
      backgroundColor: [
        'rgb(202, 235, 246)',
        'rgb(21, 155, 200)',
        'rgb(155, 218, 239)',
        'rgb(44, 135, 165)',
  
      ],
      borderColor: [
        'rgb(202, 235, 246)',
        'rgb(21, 155, 200)',
        'rgb(155, 218, 239)',
        'rgb(44, 135, 165)',
       
      ],
      borderWidth: 1,
    },
  ],
}

  const [show, setShow] = useState(false);
  return (
    <>
      <div className="container">
        <div className="navigation">
          <ul className="navigation-ul">
            <li className="navigation-li">
              <NavLink to="/home" className="link">
                <span className="icon">
                  <i class="fa-solid fa-house link-icon"></i>
                </span>
                <span className="title">Home</span>
              </NavLink>
            </li>
            <li className="navigation-li">
              <NavLink to="/add-company" className="link">
                <span className="icon">
                  <i class="fa-solid fa-building link-icon"></i>
                </span>
                <span className="title">Companies</span>
              </NavLink>
            </li>
            <li className="navigation-li">
              <NavLink to="/add-branch" className="link">
                <span className="icon">
                  <i class="fa-solid fa-code-branch link-icon"></i>
                </span>
                <span className="title">Branches</span>
              </NavLink>
            </li>
            <li className="navigation-li">
              <NavLink to="/add-department" className="link">
                <span className="icon">
                  <i class="fa-solid fa-bars link-icon"></i>
                </span>
                <span className="title">Departments</span>
              </NavLink>
            </li>
            <li className="navigation-li">
              <NavLink to="/add-employee" className="link">
                <span className="icon">
                  <i class="fa-solid fa-people-group link-icon"></i>
                </span>
                <span className="title">Employees</span>
              </NavLink>
            </li>
            <li className="navigation-li">
              <NavLink to="/reset-password" className="link">
                <span className="icon">
                  <i class="fa-sharp fa-solid fa-gear link-icon"></i>
                </span>
                <span className="title">Reset Password</span>
              </NavLink>
            </li>
            <li className="navigation-li">
              <NavLink to="/login" className="link">
                <span className="icon">
                  {" "}
                  <i class="fa-solid fa-lock link-icon"></i>
                </span>
                <span className="title"  onClick={(e) => {
              e.preventDefault();
              logoutHandler();
            }}>Logout</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="main">
          <div className="topbar">
            <div className="toggle" onClick={() => setShow(!show)}>
              <i class={`fas fa-bars ${show ? "fa-solid fa-xmark" : null}`}></i>
            </div>
            <div className="search">
              <label className="search-label">
                <input
                  type="text"
                  placeholder="Search..."
                  className="search-input"
                />
                <i class="fa-solid fa-magnifying-glass search-icon"></i>
              </label>
            </div>
          </div>
          <div className="card-box">
            <div className="card">
              <div>
                <div className="number">20</div>
                <div className="name">Companies</div>
              </div>
              <div className="icon-card">
                <i class="fa-solid fa-building link-icon"></i>
              </div>
            </div>
            <div className="card">
              <div>
                <div className="number">10</div>
                <div className="name">Branches</div>
              </div>
              <div className="icon-card">
                <i class="fa-solid fa-code-branch link-icon"></i>
              </div>
            </div>
            <div className="card">
              <div>
                <div className="number">15</div>
                <div className="name">Departments</div>
              </div>
              <div className="icon-card">
                <i class="fa-solid fa-bars link-icon"></i>
              </div>
            </div>
            <div className="card">
              <div>
                <div className="number">100</div>
                <div className="name">Employees</div>
              </div>
              <div className="icon-card">
                <i class="fa-solid fa-people-group link-icon"></i>
              </div>
            </div>
          </div>
          <div class="details">
            <div class="recent-data">
              <div class="card-header">
                <h2 className="main-header">Companies Data</h2>
                <a href="#" class="btn">
                  View All
                </a>
              </div>
              <table className="table-data">
                <thead className="table-head">
                  <tr className="table-row">
                    <td className="data-table">Company Name</td>

                    <td className="data-table">Address</td>
                    <td className="data-table">Tax Number</td>
                    <td className="data-table">Phone</td>
                  </tr>
                </thead>

                <tbody>
                  <tr className="table-row">
                    <td className="data-table">Sindion</td>

                    <td className="data-table">18 street Alex</td>
                    <td className="data-table">2</td>
                    <td className="data-table">1234567</td>
                  </tr>

                  <tr className="table-row">
                    <td className="data-table">Hawlak</td>
                    <td className="data-table">18 street Alex</td>
                    <td className="data-table">3</td>
                    <td className="data-table">1234567</td>
                  </tr>

                  <tr className="table-row">
                    <td className="data-table">TMS</td>
                    <td className="data-table">18 street Alex</td>
                    <td className="data-table">4</td>
                    <td className="data-table">1234567</td>
                  </tr>

                  <tr className="table-row">
                    <td className="data-table">Apple</td>
                    <td className="data-table">18 street Alex</td>
                    <td className="data-table">5</td>
                    <td className="data-table">1234567</td>
                  </tr>

                  <tr className="table-row">
                    <td className="data-table">Samsung</td>
                    <td className="data-table">18 street Alex</td>
                    <td className="data-table">6</td>
                    <td className="data-table">1234567</td>
                  </tr>

                  <tr className="table-row">
                    <td className="data-table">Dell</td>
                    <td className="data-table">18 street Alex</td>
                    <td className="data-table">2</td>
                    <td className="data-table">1234567</td>
                  </tr>

                  <tr className="table-row">
                    <td className="data-table">Lenovo</td>
                    <td className="data-table">18 street Alex</td>
                    <td className="data-table">14</td>
                    <td className="data-table">1234567</td>
                  </tr>

                  <tr className="table-row">
                    <td className="data-table">Addidas</td>
                    <td className="data-table">18 street Alex</td>
                    <td className="data-table">6</td>
                    <td className="data-table">1234567</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="right-data">
            <Pie data={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
