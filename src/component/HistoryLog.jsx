import React from "react";

const HistoryLog = ({ history, onHistoryItemClick }) => {
  return (
    <div className="history-log">
      <h1 className="history-title">History Logs</h1>

      {history.length === 0 ? (
        <div className="history-empty">No calculations yet</div>
      ) : (
        history.map((item, index) => (
          <div
            key={index}
            className="history-item"
            onClick={() => onHistoryItemClick(item)}
          >
            <span className="history-equation">{item.equation}</span>
            <span className="history-result">=</span>
            <span className="history-value">{item.result}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default HistoryLog;
