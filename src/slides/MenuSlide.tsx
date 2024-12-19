import styles from "./MenuSlide.module.css";

const MenuSlide = ({
  setOpen,
  handleFunc,
}: {
  setOpen: (value: boolean) => void;
  handleFunc: () => void;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.closeBtn}>
        <button onClick={() => setOpen(false)}>close</button>
      </div>
      <button onClick={handleFunc} style={{marginTop:50}}>
        <svg
          fill="white"
          height="30px"
          width="30px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512.001 512.001"
          xmlSpace="preserve"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d="M256.001,0c-6.264,0-11.341,5.077-11.341,11.341V42.5c0,6.264,5.077,11.341,11.341,11.341 c6.263,0,11.341-5.077,11.341-11.341V11.341C267.342,5.077,262.263,0,256.001,0z" />{" "}
              </g>{" "}
            </g>{" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d="M140.928,72.963l-22.032-22.031c-4.429-4.429-11.61-4.429-16.039,0c-4.429,4.429-4.429,11.61,0,16.039l22.032,22.031 c2.215,2.215,5.117,3.322,8.019,3.322c2.902,0,5.805-1.108,8.019-3.322C145.357,84.573,145.357,77.392,140.928,72.963z" />{" "}
              </g>{" "}
            </g>{" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d="M409.143,50.931c-4.43-4.429-11.609-4.429-16.04,0l-22.031,22.031c-4.429,4.429-4.429,11.61,0,16.039 c2.216,2.215,5.117,3.322,8.02,3.322s5.804-1.108,8.019-3.322l22.031-22.031C413.572,62.541,413.572,55.359,409.143,50.931z" />{" "}
              </g>{" "}
            </g>{" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d="M480.472,192.732h-31.157c-6.263,0-11.341,5.077-11.341,11.341c0,6.264,5.079,11.341,11.341,11.341h31.157 c6.263,0,11.341-5.077,11.341-11.341C491.813,197.809,486.734,192.732,480.472,192.732z" />{" "}
              </g>{" "}
            </g>{" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d="M62.687,192.732H31.529c-6.264,0-11.341,5.077-11.341,11.341c0,6.264,5.077,11.341,11.341,11.341h31.159 c6.264,0,11.341-5.077,11.341-11.341C74.029,197.809,68.951,192.732,62.687,192.732z" />{" "}
              </g>{" "}
            </g>{" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d="M377.873,110.426c-31.998-28.964-75.28-44.915-121.873-44.915c-46.593,0-89.875,15.951-121.872,44.915 c-33.414,30.247-51.818,72.387-51.818,118.656c0,72.163,31.143,102.509,53.884,124.667c1.038,1.012,2.062,2.003,3.071,2.978 c4.049,3.917,7.695,7.453,10.892,10.993v78.975c0,6.264,5.077,11.341,11.341,11.341h27.43v42.623 c0,6.264,5.077,11.341,11.341,11.341h111.464c6.263,0,11.341-5.077,11.341-11.341v-42.623h27.43 c6.263,0,11.341-5.077,11.341-11.341v-79.321c3.165-3.49,6.773-6.974,10.77-10.824c1.078-1.039,2.174-2.094,3.284-3.171 c22.701-22.038,53.792-52.22,53.792-124.296C429.69,182.812,411.288,140.673,377.873,110.426z M300.391,489.318h-88.782v-31.282 h88.782V489.318z M311.732,435.353H200.268h-27.43v-18.14h102.215c6.263,0,11.341-5.077,11.341-11.341 c0-6.264-5.079-11.341-11.341-11.341H172.839V376.39H339.16v58.964H311.732z M360.098,337.104 c-1.089,1.057-2.163,2.091-3.219,3.109c-4.685,4.511-9.17,8.831-13.248,13.495h-76.292v-54.973 c6.576,3.77,14.183,5.938,22.291,5.938c24.798,0,44.974-20.176,44.974-44.974s-20.176-44.974-44.974-44.974 c-13.369,0-25.387,5.87-33.632,15.161c-8.245-9.291-20.263-15.161-33.633-15.161c-24.798,0-44.974,20.176-44.974,44.974 s20.176,44.974,44.974,44.974c8.109,0,15.715-2.168,22.292-5.938v54.973h-76.6c-4.017-4.569-8.422-8.832-13.022-13.282 c-0.99-0.958-1.996-1.931-3.014-2.923c-22.045-21.48-47.03-45.826-47.03-108.421c0-39.781,15.753-75.948,44.357-101.841 c27.817-25.181,65.693-39.049,106.651-39.049s78.832,13.868,106.651,39.049c28.604,25.893,44.356,62.06,44.356,101.841 C407.007,291.565,382.086,315.758,360.098,337.104z M267.342,259.699c0-12.292,9.999-22.292,22.291-22.292 c12.293,0,22.292,10,22.292,22.292s-9.999,22.292-22.292,22.292C277.341,281.991,267.342,271.992,267.342,259.699z M244.659,259.699c0,12.293-10.001,22.292-22.292,22.292c-12.291,0-22.292-10-22.292-22.292s9.999-22.292,22.292-22.292 C234.66,237.407,244.659,247.406,244.659,259.699z" />{" "}
              </g>{" "}
            </g>{" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d="M317.525,397.854c-0.522-0.522-1.1-0.998-1.725-1.418c-0.612-0.408-1.27-0.748-1.951-1.032 c-0.692-0.284-1.406-0.51-2.121-0.646c-1.463-0.295-2.971-0.295-4.434,0c-0.726,0.136-1.44,0.363-2.121,0.646 c-0.691,0.284-1.348,0.624-1.961,1.032c-0.624,0.42-1.203,0.896-1.725,1.418c-2.108,2.109-3.323,5.035-3.323,8.018 c0,0.737,0.079,1.486,0.227,2.211c0.15,0.726,0.365,1.44,0.649,2.121c0.284,0.692,0.635,1.35,1.043,1.962 c0.407,0.624,0.883,1.202,1.405,1.724c0.522,0.522,1.101,0.998,1.725,1.406c0.612,0.408,1.27,0.76,1.961,1.043 c0.682,0.284,1.395,0.499,2.121,0.646c0.727,0.147,1.476,0.227,2.212,0.227c0.737,0,1.487-0.079,2.223-0.227 c0.715-0.147,1.429-0.363,2.121-0.646c0.68-0.284,1.338-0.635,1.951-1.043c0.625-0.408,1.203-0.885,1.725-1.406 c0.522-0.522,0.998-1.1,1.418-1.724c0.407-0.612,0.76-1.27,1.043-1.962c0.284-0.68,0.498-1.395,0.646-2.121 c0.147-0.726,0.214-1.474,0.214-2.211C320.848,402.889,319.634,399.963,317.525,397.854z" />{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>

        <div style={{ marginLeft: 10 }}>Toggle theme</div>
      </button>
    </div>
  );
};

export default MenuSlide;