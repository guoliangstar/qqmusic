import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./top.css";
export default class Top extends Component {
    render() {
        return (
            <div id="top">
                <ul>
                    <li>
                        <NavLink to="/home">
                            <span>推荐</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/rank">
                            <span>排行榜</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/search">
                            <span>搜索</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}