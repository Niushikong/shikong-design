const Preloader = ({ onComplete }) => {
  return (
    <div className="preloader" onTransitionEnd={onComplete}>
      <div className="preloader-content">
        <div className="preloader-logo">SHIKONG</div>
        <div className="preloader-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="preloader-text">设计 · 构筑空间之美</div>
      </div>
    </div>
  );
};

export default Preloader;