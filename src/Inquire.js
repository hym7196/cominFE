import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { ko } from "date-fns/locale";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./reserve.css";

const BlockItem = ({ selectedPlace, selectedClass, capacity, timeColors, buttonText }) => {
  return (
    <li className="block">
      <span className="block-typoI">{selectedPlace}</span>
      <span className="block-typoI">{selectedClass}</span>
      <span className="block-typoI">{capacity}</span>
      <span className="block-typoI">{timeColors}</span>
      <span className="frame7I">
        <a className="frame7-typo">{buttonText}</a>
      </span>

      
    </li>
  );
};

function getFacilityData(nowFacility) {
  if (nowFacility === "나의 이용내역") {
    return [
      {
        selectedPlace : "5호관",
        selectedClass : "101호",
        capacity: "20",
        timeColors: "12:30 ~ 14:30",
        buttonText: "건의하기",
      },
      {
        selectedPlace : "5호관",
        selectedClass : "102호",
        capacity: "10 ~ 18",
        timeColors: "11:30 ~ 13:30",
        buttonText: "건의하기",
      },
    ];
  } else if (nowFacility === "이용예정 목록") {
    return [
      {
        selectedPlace : "5호관",
        selectedClass : "101호",
        capacity: "40",
        timeColors: "12:30 ~ 14:30",
        buttonText: "건의하기",
      },
    ];
  } else if (nowFacility === "문의사항 확인") {
    return [
      {
        selectedPlace : "60주년기념관",
        selectedClass : "101호",
        capacity: "80",
      },
    ];
  }
}

const Inquire = () => {
  const [selectedDate, setSelectedDate] = useState(new Date("2023-09-18"));
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [nowFacility, setNowFacility] = useState("나의 이용내역");
  const facilityData = getFacilityData(nowFacility);

  const [showDatePicker1, setShowDatePicker1] = useState(false);
  const [showDatePicker2, setShowDatePicker2] = useState(false);
  const [selectedDate1, setSelectedDate1] = useState(new Date("2023-09-18"));
  const [selectedDate2, setSelectedDate2] = useState(new Date("2023-09-18"));

  const handleItemClick = (selectedFacility) => {
    setNowFacility(selectedFacility);
  };

  const handleCalendarClick = () => {
    setShowDatePicker(!showDatePicker);
  };

  const selectedStyle = {
    color: "rgba(97, 135, 210, 0.70)",
  };

  return (
    <>
      <div className="frame34">
        <div id="Facility">
          <h2 className="facility">{nowFacility}</h2>
        </div>

        <div className="facility-right">
          {nowFacility === "나의 이용내역" && (
            <div>
              <span
                className="frame3I"
                onClick={() => setShowDatePicker1(!showDatePicker1)}
              >
                <p className="frame3I-typo">
                  {selectedDate1.toISOString().split("T")[0]}
                </p>
              </span>
              <div className="Line-23"></div>
              <span
                className="frame3I"
                onClick={() => setShowDatePicker2(!showDatePicker2)}
              >
                <p className="frame3I-typo">
                  {selectedDate2.toISOString().split("T")[0]}
                </p>
              </span>
              <div className="absolutePositionI-1">
                {showDatePicker1 && (
                  <DatePicker
                    selected={selectedDate1}
                    onChange={(date) => {
                      setSelectedDate1(date);
                      setShowDatePicker1(false);
                      setShowDatePicker(false);
                    }}
                    inline
                    locale={ko}
                    style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
                  />
                )}
              </div>
              <div className="absolutePositionI-2">
                {showDatePicker2 && (
                  <DatePicker
                    selected={selectedDate2}
                    onChange={(date) => {
                      setSelectedDate2(date);
                      setShowDatePicker2(false);
                      setShowDatePicker(false);
                    }}
                    inline
                    locale={ko}
                    style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
                  />
                )}
              </div>
            </div>
          )}
        </div>

        {nowFacility === "이용예정 목록" && (
          <div className="secondI">
            <span
              className="frame3I"
              onClick={() => setShowDatePicker1(!showDatePicker1)}
            >
              <p className="frame3I-typo">
                {selectedDate1.toISOString().split("T")[0]}
              </p>
            </span>
            <div className="Line-23"></div>
            <span
              className="frame3I"
              onClick={() => setShowDatePicker2(!showDatePicker2)}
            >
              <p className="frame3I-typo">
                {selectedDate2.toISOString().split("T")[0]}
              </p>
            </span>
            <div className="absolutePositionI-1">
              {showDatePicker1 && (
                <DatePicker
                  selected={selectedDate1}
                  onChange={(date) => {
                    setSelectedDate1(date);
                    setShowDatePicker1(false);
                    setShowDatePicker(false);
                  }}
                  inline
                  locale={ko}
                  style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
                />
              )}
            </div>
            <div className="absolutePositionI-2">
              {showDatePicker2 && (
                <DatePicker
                  selected={selectedDate2}
                  onChange={(date) => {
                    setSelectedDate2(date);
                    setShowDatePicker2(false);
                    setShowDatePicker(false);
                  }}
                  inline
                  locale={ko}
                  style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
                />
              )}
            </div>
          </div>
        )}
      </div>

      <div id="reList_right" className="reList_right">
        <div id="frame5">
          <ul className="frame5">
            <li className="frame6">
              <span className="frame6-typo">이름</span>
              <span className="frame6-typo">수용인원</span>
              <span className="frame6-typo">이용시간</span>
              <span className="frame6-typo">예약</span>
            </li>
            {facilityData.map((item, index) => (
              <BlockItem
                key={index}
                selectedPlace={item.selectedPlace}
                selectedClass={item.selectedClass}
                capacity={item.capacity}
                timeColors={item.timeColors}
                buttonText={item.buttonText}
              />
            ))}
          </ul>
        </div>
      </div>

      <div id="reListI">
        <ul className="List">
          <li className="list-up">
            <p className="list-typo">시설예약</p>
          </li>
          <li
            className="list-typo2"
            onClick={() => handleItemClick("나의 이용내역")}
            style={nowFacility === "나의 이용내역" ? selectedStyle : {}}
          >
            나의 이용내역
          </li>
          <li
            className="list-typo2"
            onClick={() => handleItemClick("이용예정 목록")}
            style={nowFacility === "이용예정 목록" ? selectedStyle : {}}
          >
            이용예정 목록
          </li>
          <li
            className="list-typo2"
            onClick={() => handleItemClick("문의사항 확인")}
            style={nowFacility === "문의사항 확인" ? selectedStyle : {}}
          >
            문의사항 확인
          </li>
        </ul>
      </div>
    </>
  );
};

export default Inquire;
