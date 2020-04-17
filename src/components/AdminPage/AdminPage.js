import React, { Component } from "react";
import axios from "axios";

class AdminPage extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Feeling</th>
              <th>Comprehension</th>
              <th>Support</th>
              <th>Comments</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr></tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default AdminPage;
