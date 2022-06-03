import React from "react";

const DisplayDonarList = ({ donar }) => {
  return (
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img src={donar.img} class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Name: {donar.name}</h5>
            <p class="card-title">Address:{donar.address}</p>
            <button class="btn btn-primary">রক্তের জন্য রিকুয়েষ্ট করুন</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayDonarList;
