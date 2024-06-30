import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

const Design = ({ className = "" }) => {
  return (
    <section
      className={`w-[1444px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] max-w-full h-[5523px] text-left text-mid text-main-para font-paragraph ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] bg-white w-[1444px] h-[5523px] overflow-hidden">
        <div className="absolute top-[0px] left-[0px] rounded-t-none rounded-br-[300px] rounded-bl-none bg-lavender w-[1440px] h-[520px] overflow-hidden text-16xl text-black font-arvo">
          <img
            className="absolute top-[170px] left-[775px] w-[549.6px] h-[350px] object-cover"
            alt="profile"
            src="/21-1@2x.png"
          />
          <div className="absolute top-[12px] left-[129px]">covid.</div>
          <div className="absolute top-[38px] left-[856px] w-[350px] h-[22px]" />
          <nav className="m-0 absolute top-[22px] left-[650px] flex flex-row items-center justify-center py-[5px] px-[7px] text-left text-lg text-gray font-arvo">
            <div className="flex flex-row items-start justify-start gap-[28px]">
              <div className="relative capitalize">Home</div>
              <div className="relative capitalize">Reports</div>
              <div className="relative capitalize">centers</div>
              <div className="w-[55px] relative capitalize inline-block shrink-0">
                about
              </div>
              <div className="w-[90px] relative capitalize inline-block shrink-0">
                symptons
              </div>
              <div className="w-[71px] relative capitalize inline-block shrink-0">
                contact
              </div>
            </div>
          </nav>
          <div className="absolute top-[151px] left-[129px] w-[544.4px] h-[218px] text-base text-slateblue font-paragraph">
            <b className="absolute top-[-9px] left-[0px] uppercase inline-block w-[196px] h-5">
              covid-19 awareness
            </b>
            <h2 className="m-0 absolute top-[8px] left-[0px] text-[48.3px] tracking-[0.04em] capitalize font-black font-inherit text-heading inline-block w-[584px] h-[60px]">
              stay safe. stay Home.
            </h2>
            <p className="m-0 absolute top-[88.4px] left-[0px] text-mini leading-[23px] text-gray inline-block w-[544.4px] h-[43.9px]">
              <span className="block">{`Amet minim mollit non deserunt ullamco est sit do amet sint officia. `}</span>
              <span className="block">{`Velit officia consequat duis enim velit mollit. `}</span>
            </p>
            <Button
              className="absolute top-[162px] left-[-10px]"
              variant="primary"
            >
              how to prevent
            </Button>
          </div>
        </div>
        <div className="absolute top-[520px] left-[0px] w-[1440px] h-[405px] overflow-hidden text-xs">
          <h4 className="m-0 absolute top-[63px] left-[551px] text-11xl capitalize font-black font-inherit text-heading whitespace-pre-wrap">
            Coronavirus Statistics
          </h4>
          <p className="m-0 absolute top-[111px] left-[469px] text-mini leading-[23px] text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#808081] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">{`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. `}</p>
          <div className="absolute top-[190px] left-[231px] w-[272px] h-[190px] overflow-hidden">
            <img
              className="absolute top-[30px] left-[92px] w-[50px] h-[50px] overflow-hidden"
              alt=""
              src="/bug-report.svg"
            />
            <div className="absolute top-[0px] left-[-2px] bg-white w-[272px] h-[190px] overflow-hidden">
              <div className="absolute top-[0px] left-[29px] w-[215px] h-[136px]">
                <img
                  className="absolute top-[0px] left-[83px] w-[50px] h-10 overflow-hidden"
                  alt=""
                  src="/bug-report1.svg"
                />
                <div className="absolute top-[123px] left-[58px] tracking-[0.1em] leading-[23px] uppercase font-black">
                  active case
                </div>
                <div className="absolute top-[70px] left-[24px] text-16xl leading-[23px] font-black text-black">
                  95,856,25
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[189px] left-[585px] w-[272px] h-[190px] overflow-hidden">
            <img
              className="absolute top-[30px] left-[92px] w-[50px] h-[50px] overflow-hidden"
              alt=""
              src="/bug-report.svg"
            />
            <div className="absolute top-[0px] left-[-2px] bg-white w-[272px] h-[190px] overflow-hidden">
              <div className="absolute top-[0px] left-[29px] w-[215px] h-[136px]">
                <img
                  className="absolute top-[0px] left-[83px] w-[50px] h-10 overflow-hidden"
                  alt=""
                  src="/bug-report1.svg"
                />
                <div className="absolute top-[123px] left-[58px] tracking-[0.1em] leading-[23px] uppercase font-black">
                  death case
                </div>
                <div className="absolute top-[70px] left-[35px] text-16xl leading-[23px] font-black text-black">
                  5,856,25
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[190px] left-[939px] w-[272px] h-[190px] overflow-hidden">
            <img
              className="absolute top-[30px] left-[92px] w-[50px] h-[50px] overflow-hidden"
              alt=""
              src="/bug-report.svg"
            />
            <div className="absolute top-[0px] left-[-2px] bg-white w-[272px] h-[190px] overflow-hidden">
              <div className="absolute top-[0px] left-[29px] w-[215px] h-[136px]">
                <img
                  className="absolute top-[0px] left-[83px] w-[50px] h-10 overflow-hidden"
                  alt=""
                  src="/bug-report1.svg"
                />
                <div className="absolute top-[123px] left-[58px] tracking-[0.1em] leading-[23px] uppercase font-black">
                  recovred cases
                </div>
                <div className="absolute top-[70px] left-[14px] text-16xl leading-[23px] font-black text-black">
                  595,856,25
                </div>
              </div>
            </div>
          </div>
        </div>
        <h4 className="m-0 absolute top-[2989px] left-[545px] text-11xl capitalize font-black font-inherit text-heading">
          How to protect yourself
        </h4>
        <p className="m-0 absolute top-[3037px] left-[470px] text-mini leading-[23px] text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#808081] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">{`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. `}</p>
        <section className="absolute top-[979px] left-[130px] w-[1110px] h-[923px] text-left text-mini text-main-para font-paragraph">
          <div className="absolute top-[0px] left-[0px] w-[1110px] h-[411px]">
            <img
              className="absolute top-[0px] left-[0px] w-[605px] h-[411px] object-cover"
              alt=""
              src="/pexelsjepgambardella7689872-1@2x.png"
            />
            <div className="absolute top-[0px] left-[707px] w-[403px] h-[320.8px]">
              <h3 className="m-0 absolute top-[0px] left-[0px] text-11xl capitalize font-black font-inherit text-heading">
                What is coronavirus?
              </h3>
              <p className="m-0 absolute top-[64px] left-[0px] leading-[23px] inline-block w-[403px]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation
              </p>
              <ul className="m-0 absolute top-[160px] left-[23px] w-[235px] h-[23px]">
                <div className="absolute top-[0px] left-[0px] leading-[23px] inline-block w-[235px]">
                  Amet minim mollit non deserunt
                </div>
              </ul>
              <ul className="m-0 absolute top-[190px] left-[25px] w-[235px] h-[23px]">
                <div className="absolute top-[0px] left-[0px] leading-[23px] inline-block w-[235px]">
                  Deserunt ullamco est sit
                </div>
              </ul>
              <ul className="m-0 absolute top-[220px] left-[25px] w-[223px] h-[23px]">
                <div className="absolute top-[0px] left-[0px] leading-[23px]">{`Velit officia consequat duis enim `}</div>
              </ul>
              <button className="cursor-pointer [border:none] py-[12.9px] px-[32.2px] bg-heading absolute top-[279px] left-[0px] rounded-6xl-8 overflow-hidden flex flex-row items-center justify-center">
                <div className="relative text-mini uppercase font-paragraph text-white text-left">
                  learn More
                </div>
              </button>
              <img
                className="absolute top-[164px] left-[-2px] w-[15px] h-[15px] overflow-hidden"
                alt=""
                src="/check-circle.svg"
              />
              <img
                className="absolute top-[194px] left-[0px] w-[15px] h-[15px] overflow-hidden"
                alt=""
                src="/check-circle.svg"
              />
              <img
                className="absolute top-[224px] left-[0px] w-[15px] h-[15px] overflow-hidden"
                alt=""
                src="/check-circle.svg"
              />
            </div>
            <div className="absolute top-[345px] left-[517px] w-[88px] h-[66px]">
              <a className="[text-decoration:none] absolute top-[0px] left-[0px] bg-heading w-[88px] h-[66px]" />
              <img
                className="absolute top-[21px] left-[32px] w-[25px] h-[25px] object-contain"
                alt=""
                src="/polygon-1.svg"
              />
            </div>
          </div>
          <div className="absolute top-[512px] left-[0px] w-[1110px] h-[411px]">
            <img
              className="absolute top-[0px] left-[505px] w-[605px] h-[411px] object-cover"
              alt=""
              src="/pexelsjepgambardella7689872-11@2x.png"
            />
            <div className="absolute top-[0px] left-[0px] w-[403px] h-[320.8px]">
              <h3 className="m-0 absolute top-[0px] left-[0px] text-11xl capitalize font-black font-inherit text-heading">
                Why is it Dangerous?
              </h3>
              <p className="m-0 absolute top-[64px] left-[0px] leading-[23px] inline-block w-[403px]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation
              </p>
              <ul className="m-0 absolute top-[160px] left-[23px] w-[235px] h-[23px]">
                <div className="absolute top-[0px] left-[0px] leading-[23px] inline-block w-[235px]">
                  Amet minim mollit non deserunt
                </div>
              </ul>
              <ul className="m-0 absolute top-[190px] left-[25px] w-[235px] h-[23px]">
                <div className="absolute top-[0px] left-[0px] leading-[23px] inline-block w-[235px]">
                  Deserunt ullamco est sit
                </div>
              </ul>
              <ul className="m-0 absolute top-[220px] left-[25px] w-[223px] h-[23px]">
                <div className="absolute top-[0px] left-[0px] leading-[23px]">{`Velit officia consequat duis enim `}</div>
              </ul>
              <button className="cursor-pointer [border:none] py-[12.9px] px-[32.2px] bg-heading absolute top-[279px] left-[0px] rounded-6xl-8 overflow-hidden flex flex-row items-center justify-center">
                <div className="relative text-mini uppercase font-paragraph text-white text-left">
                  learn More
                </div>
              </button>
              <img
                className="absolute top-[164px] left-[-2px] w-[15px] h-[15px] overflow-hidden"
                alt=""
                src="/check-circle.svg"
              />
              <img
                className="absolute top-[194px] left-[0px] w-[15px] h-[15px] overflow-hidden"
                alt=""
                src="/check-circle.svg"
              />
              <img
                className="absolute top-[224px] left-[0px] w-[15px] h-[15px] overflow-hidden"
                alt=""
                src="/check-circle.svg"
              />
            </div>
            <a className="[text-decoration:none] absolute top-[345px] left-[505px] w-[88px] h-[66px]">
              <div className="absolute top-[0px] left-[0px] bg-heading w-[88px] h-[66px]" />
              <img
                className="absolute top-[21px] left-[32px] w-[25px] h-[25px] object-contain"
                alt=""
                src="/polygon-1.svg"
              />
            </a>
          </div>
        </section>
        <div className="absolute top-[1995px] left-[130px] w-[1179px] h-[95px] text-lg text-heading">
          <div className="absolute top-[0px] left-[0px] w-[273px] h-[95px]">
            <div className="absolute top-[0px] left-[0px] bg-white w-[273px] h-[95px]" />
            <div className="absolute top-[27px] left-[71px] w-[169px] h-[46px]">
              <div className="absolute top-[0px] left-[0px] w-[169px] h-[46px]">
                <div className="absolute top-[0px] left-[0px] leading-[23px] capitalize font-black">
                  symptoms
                </div>
                <div className="absolute top-[23px] left-[0px] text-base leading-[23px] text-main-para inline-block w-[169px]">
                  Amet minim mollit non
                </div>
              </div>
            </div>
            <img
              className="absolute top-[27px] left-[12px] w-[50px] h-[50px] object-contain"
              alt=""
              src="/mask-group@2x.png"
            />
          </div>
          <div className="absolute top-[0px] left-[302px] w-[273px] h-[95px]">
            <div className="absolute top-[0px] left-[0px] bg-white w-[273px] h-[95px]" />
            <div className="absolute top-[27px] left-[71px] w-[169px] h-[46px]">
              <div className="absolute top-[0px] left-[0px] w-[169px] h-[46px]">
                <div className="absolute top-[0px] left-[0px] leading-[23px] capitalize font-black">
                  protection
                </div>
                <div className="absolute top-[23px] left-[0px] text-base leading-[23px] text-main-para inline-block w-[169px]">
                  Amet minim mollit non
                </div>
              </div>
            </div>
            <img
              className="absolute top-[27px] left-[8px] w-[50px] h-[50px] object-contain"
              alt=""
              src="/mask-group1@2x.png"
            />
          </div>
          <div className="absolute top-[0px] left-[604px] w-[273px] h-[95px]">
            <div className="absolute top-[0px] left-[0px] bg-white w-[273px] h-[95px]" />
            <div className="absolute top-[25px] left-[10px] w-[230px] h-[50px]">
              <img
                className="absolute top-[0px] left-[0px] w-[50.9px] h-[50px] object-cover"
                alt=""
                src="/mask-group2@2x.png"
              />
              <div className="absolute top-[2px] left-[61px] w-[169px] h-[46px]">
                <div className="absolute top-[0px] left-[0px] leading-[23px] capitalize font-black">
                  security
                </div>
                <div className="absolute top-[23px] left-[0px] text-base leading-[23px] text-main-para inline-block w-[169px]">
                  Amet minim mollit non
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[0px] left-[906px] w-[273px] h-[95px]">
            <div className="absolute top-[0px] left-[0px] bg-white w-[273px] h-[95px]" />
            <div className="absolute top-[27px] left-[83px] w-[169px] h-[46px]">
              <div className="absolute top-[0px] left-[0px] w-[169px] h-[46px]">
                <div className="absolute top-[0px] left-[0px] leading-[23px] capitalize font-black">
                  treatment
                </div>
                <div className="absolute top-[23px] left-[0px] text-base leading-[23px] text-main-para inline-block w-[169px]">
                  Amet minim mollit non
                </div>
              </div>
            </div>
            <img
              className="absolute top-[27px] left-[21px] w-[50px] h-[50px] object-contain"
              alt=""
              src="/mask-group3@2x.png"
            />
          </div>
        </div>
        <div className="absolute top-[2132px] left-[0px] bg-backgroundcolor w-[1440px] h-[800px] overflow-hidden text-base">
          <div className="absolute top-[32px] left-[132px] w-[528px] h-[737px] text-mid text-black">
            <div className="absolute top-[87px] left-[0px] w-[239px] h-[300px]">
              <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_10px_rgba(111,_66,_193,_0.2)] rounded-3xs bg-white w-[239px] h-[300px]" />
              <img
                className="absolute top-[0px] left-[0px] w-[239px] h-[130px] object-cover"
                alt=""
                src="/group-11@2x.png"
              />
              <div className="absolute top-[167px] left-[23px] w-[193.1px] h-[100px]">
                <b className="absolute top-[0px] left-[0px] capitalize inline-block w-[131px]">
                  Stay at home
                </b>
                <div className="absolute top-[31px] left-[0.1px] text-mini leading-[23px] text-main-para">
                  <p className="m-0">Amet minim mollit non dese</p>
                  <p className="m-0">ullamco est sit aliqua dolor</p>
                  <p className="m-0">{`do amet sint. `}</p>
                </div>
              </div>
            </div>
            <div className="absolute top-[437px] left-[0px] w-[239px] h-[300px]">
              <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_10px_rgba(111,_66,_193,_0.2)] rounded-3xs bg-white w-[239px] h-[300px]" />
              <img
                className="absolute top-[0px] left-[0px] w-[239px] h-[130px] object-cover"
                alt=""
                src="/group-11@2x.png"
              />
              <div className="absolute top-[167px] left-[23px] w-[193.1px] h-[100px]">
                <b className="absolute top-[0px] left-[0px] capitalize inline-block w-[131px]">
                  Stay at home
                </b>
                <div className="absolute top-[31px] left-[0.1px] text-mini leading-[23px] text-main-para">
                  <p className="m-0">Amet minim mollit non dese</p>
                  <p className="m-0">ullamco est sit aliqua dolor</p>
                  <p className="m-0">{`do amet sint. `}</p>
                </div>
              </div>
            </div>
            <div className="absolute top-[350px] left-[289px] w-[239px] h-[300px]">
              <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_10px_rgba(111,_66,_193,_0.2)] rounded-3xs bg-white w-[239px] h-[300px]" />
              <img
                className="absolute top-[0px] left-[0px] w-[239px] h-[130px] object-cover"
                alt=""
                src="/group-11@2x.png"
              />
              <div className="absolute top-[167px] left-[23px] w-[193.1px] h-[100px]">
                <b className="absolute top-[0px] left-[0px] capitalize inline-block w-[131px]">
                  Stay at home
                </b>
                <div className="absolute top-[31px] left-[0.1px] text-mini leading-[23px] text-main-para">
                  <p className="m-0">Amet minim mollit non dese</p>
                  <p className="m-0">ullamco est sit aliqua dolor</p>
                  <p className="m-0">{`do amet sint. `}</p>
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[289px] w-[239px] h-[300px]">
              <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_10px_rgba(111,_66,_193,_0.2)] rounded-3xs bg-white w-[239px] h-[300px]" />
              <img
                className="absolute top-[0px] left-[0px] w-[239px] h-[130px] object-cover"
                alt=""
                src="/group-11@2x.png"
              />
              <div className="absolute top-[167px] left-[23px] w-[193.1px] h-[100px]">
                <b className="absolute top-[0px] left-[0px] capitalize inline-block w-[131px]">
                  Stay at home
                </b>
                <div className="absolute top-[31px] left-[0.1px] text-mini leading-[23px] text-main-para">
                  <p className="m-0">Amet minim mollit non dese</p>
                  <p className="m-0">ullamco est sit aliqua dolor</p>
                  <p className="m-0">{`do amet sint. `}</p>
                </div>
              </div>
            </div>
          </div>
          <h3 className="m-0 absolute top-[162px] left-[736px] text-11xl capitalize font-black font-inherit text-heading">
            How to prevernt Coronavirus?
          </h3>
          <p className="m-0 absolute top-[227px] left-[736px] flex flex-row items-start justify-start">
            <div className="w-[403px] relative leading-[23px] inline-block shrink-0">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation
            </div>
          </p>
          <p className="m-0 absolute top-[316px] left-[736px] flex flex-row items-start justify-start">
            <div className="w-[403px] relative leading-[23px] inline-block shrink-0">{`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. `}</div>
          </p>
          <ul className="m-0 absolute top-[400px] left-[761px] w-[235px] h-[23px]">
            <div className="absolute top-[0px] left-[0px] leading-[23px] inline-block w-[235px]">
              Amet minim mollit non deserunt
            </div>
          </ul>
          <ul className="m-0 absolute top-[430px] left-[763px] w-[235px] h-[23px]">
            <div className="absolute top-[0px] left-[0px] leading-[23px] inline-block w-[235px]">
              Deserunt ullamco est sit
            </div>
          </ul>
          <ul className="m-0 absolute top-[460px] left-[763px] w-[238px] h-[23px]">
            <div className="absolute top-[0px] left-[0px] leading-[23px]">{`Velit officia consequat duis enim `}</div>
          </ul>
          <button className="cursor-pointer [border:none] py-[12.9px] px-[32.2px] bg-heading absolute top-[519px] left-[736px] rounded-6xl-8 overflow-hidden flex flex-row items-center justify-center">
            <div className="relative text-[13px] uppercase font-paragraph text-white text-left">
              read more about prevention
            </div>
          </button>
          <img
            className="absolute top-[404px] left-[736px] w-[15px] h-[15px] overflow-hidden"
            alt=""
            src="/check-circle.svg"
          />
          <img
            className="absolute top-[434px] left-[736px] w-[15px] h-[15px] overflow-hidden"
            alt=""
            src="/check-circle.svg"
          />
          <img
            className="absolute top-[464px] left-[736px] w-[15px] h-[15px] overflow-hidden"
            alt=""
            src="/check-circle.svg"
          />
        </div>
        <div className="absolute top-[3151px] left-[130px] w-[1126px] h-[444.3px]">
          <ul className="m-0 absolute top-[79px] left-[0px] w-[524px] h-[295px]">
            <p className="m-0 absolute top-[0px] left-[2px] leading-[23px] font-bold text-black">
              You should do
            </p>
            <p className="m-0 absolute top-[0px] left-[303px] leading-[23px] font-bold text-black">
              You should avoid
            </p>
            <div className="absolute top-[57px] left-[0px] w-[135px] h-[23px]">
              <img
                className="absolute top-[4px] left-[0px] w-[15px] h-[15px] overflow-hidden"
                alt=""
                src="/check-circle1.svg"
              />
              <div className="absolute top-[0px] left-[26px] leading-[23px] inline-block w-[109px]">
                Stay at home
              </div>
            </div>
            <img
              className="absolute top-[57px] left-[303px] w-[202px] h-[23px]"
              alt=""
            />
            <div className="absolute top-[100px] left-[0px] w-[135px] h-[23px]">
              <img
                className="absolute top-[4px] left-[0px] w-[15px] h-[15px] overflow-hidden"
                alt=""
                src="/check-circle1.svg"
              />
              <div className="absolute top-[0px] left-[26px] leading-[23px] inline-block w-[109px]">
                Wear mask
              </div>
            </div>
            <div className="absolute top-[143px] left-[0px] w-[135px] h-[23px]">
              <img
                className="absolute top-[4px] left-[0px] w-[15px] h-[15px] overflow-hidden"
                alt=""
                src="/check-circle1.svg"
              />
              <div className="absolute top-[0px] left-[26px] leading-[23px] inline-block w-[109px]">
                Use Sanitizer
              </div>
            </div>
            <div className="absolute top-[186px] left-[0px] w-[182px] h-[23px]">
              <img
                className="absolute top-[4px] left-[0px] w-[15px] h-[15px] overflow-hidden"
                alt=""
                src="/check-circle1.svg"
              />
              <div className="absolute top-[0px] left-[26px] leading-[23px]">
                Disinfect your home
              </div>
            </div>
            <div className="absolute top-[229px] left-[0px] w-[162px] h-[23px]">
              <img
                className="absolute top-[4px] left-[0px] w-[15px] h-[15px] overflow-hidden"
                alt=""
                src="/check-circle1.svg"
              />
              <div className="absolute top-[0px] left-[26px] leading-[23px]">
                wash your hands
              </div>
            </div>
            <div className="absolute top-[272px] left-[0px] w-[201px] h-[23px]">
              <img
                className="absolute top-[4px] left-[0px] w-[15px] h-[15px] overflow-hidden"
                alt=""
                src="/check-circle1.svg"
              />
              <div className="absolute top-[0px] left-[26px] leading-[23px]">
                Frequent self-isolation
              </div>
            </div>
            <div className="absolute w-[calc(100%_-_328px)] top-[57px] right-[25px] left-[303px] h-[23px]">
              <div className="absolute top-[0px] left-[26px] leading-[23px]">
                Avoid Infected people
              </div>
              <img
                className="absolute top-[4px] left-[0px] w-[15px] h-[15px]"
                alt=""
                src="/iconnavigationclose-24px.svg"
              />
            </div>
            <div className="absolute w-[calc(100%_-_386px)] top-[100px] right-[83px] left-[303px] h-[23px]">
              <div className="absolute top-[0px] left-[26px] leading-[23px]">
                Avoid animals
              </div>
              <img
                className="absolute top-[4px] left-[0px] w-[15px] h-[15px]"
                alt=""
                src="/iconnavigationclose-24px.svg"
              />
            </div>
            <div className="absolute w-[calc(100%_-_342px)] top-[143px] right-[39px] left-[303px] h-[23px]">
              <div className="absolute top-[0px] left-[26px] leading-[23px] whitespace-pre-wrap">
                Avoid handshaking
              </div>
              <img
                className="absolute top-[4px] left-[0px] w-[15px] h-[15px]"
                alt=""
                src="/iconnavigationclose-24px.svg"
              />
            </div>
            <div className="absolute w-[calc(100%_-_321px)] top-[186px] right-[18px] left-[303px] h-[23px]">
              <div className="absolute top-[0px] left-[26px] leading-[23px]">
                Avoid infected sufaces
              </div>
              <img
                className="absolute top-[4px] left-[0px] w-[15px] h-[15px]"
                alt=""
                src="/iconnavigationclose-24px.svg"
              />
            </div>
            <div className="absolute w-[calc(100%_-_303px)] top-[229px] right-[0px] left-[303px] h-[23px]">
              <div className="absolute top-[0px] left-[26px] leading-[23px]">
                Avoid touching your face
              </div>
              <img
                className="absolute top-[4px] left-[0px] w-[15px] h-[15px]"
                alt=""
                src="/iconnavigationclose-24px.svg"
              />
            </div>
            <div className="absolute w-[calc(100%_-_384px)] top-[272px] right-[81px] left-[303px] h-[23px]">
              <div className="absolute top-[0px] left-[26px] leading-[23px]">
                Avoid droplets
              </div>
              <img
                className="absolute top-[4px] left-[0px] w-[15px] h-[15px]"
                alt=""
                src="/iconnavigationclose-24px.svg"
              />
            </div>
          </ul>
          <img
            className="absolute top-[0px] left-[577px] w-[549px] h-[444.3px] object-cover"
            alt=""
            src="/1-1@2x.png"
          />
        </div>
        <div className="absolute top-[3663px] left-[2px] bg-backgroundcolor w-[1439px] h-[875px] overflow-hidden text-center text-heading">
          <div className="absolute top-[63px] left-[541px] text-11xl capitalize font-black text-left">
            Symtoms of coranavirus
          </div>
          <div className="absolute top-[111px] left-[466px] text-mini leading-[23px] text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#808081] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            <p className="m-0">{`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. `}</p>
            <p className="m-0">{`Amet minim mollit non deserunt `}</p>
          </div>
          <span className="absolute top-[716px] left-[235px] leading-[23px] text-left text-gray">
            <p className="m-0">
              <span className="text-heading">{`Stay at home and call your doctor: `}</span>
              <span> Amet minim mollit non deserunt ullam</span>
            </p>
            <p className="m-0 whitespace-pre-wrap">{`est sit aliqua dolor do amet sint.  `}</p>
          </span>
          <div className="absolute top-[249px] left-[162px] w-[470px] h-[184px]">
            <div className="absolute top-[0px] left-[0px] shadow-[0px_10px_12px_rgba(190,_190,_190,_0.25)] bg-white w-[470px] h-[184px]" />
            <div className="absolute top-[37px] left-[35px] w-[400px] h-[102px]">
              <img
                className="absolute top-[11px] left-[0px] w-20 h-20 object-cover"
                alt=""
                src="/icons8fever64-1@2x.png"
              />
              <div className="absolute top-[0px] left-[102px] w-[298px] h-[102px]">
                <b className="absolute top-[0px] left-[0px] leading-[23px]">
                  High Fever
                </b>
                <div className="absolute top-[33px] left-[0px] text-mini leading-[23px] text-darkgray text-left">
                  <p className="m-0">Amet minim mollit non deserunt ullam</p>
                  <p className="m-0 whitespace-pre-wrap">{`est sit aliqua dolor do amet sint. Velit  `}</p>
                  <p className="m-0">consequat duis enim velit mollit.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[249px] left-[807px] w-[470px] h-[184px]">
            <div className="absolute top-[0px] left-[0px] shadow-[0px_10px_12px_rgba(190,_190,_190,_0.25)] bg-white w-[470px] h-[184px]" />
            <div className="absolute top-[37px] left-[35px] w-[400px] h-[102px]">
              <img
                className="absolute top-[11px] left-[0px] w-20 h-20 object-cover"
                alt=""
                src="/icons8fever64-1@2x.png"
              />
              <p className="m-0 absolute top-[0px] left-[102px] w-[298px] h-[102px]">
                <b className="absolute top-[0px] left-[0px] leading-[23px]">
                  Cough
                </b>
                <div className="absolute top-[33px] left-[0px] text-mini leading-[23px] text-darkgray text-left">
                  <p className="m-0">Amet minim mollit non deserunt ullam</p>
                  <p className="m-0 whitespace-pre-wrap">{`est sit aliqua dolor do amet sint. Velit  `}</p>
                  <p className="m-0">consequat duis enim velit mollit.</p>
                </div>
              </p>
            </div>
          </div>
          <div className="absolute top-[473px] left-[162px] w-[470px] h-[184px]">
            <div className="absolute top-[0px] left-[0px] shadow-[0px_10px_12px_rgba(190,_190,_190,_0.25)] bg-white w-[470px] h-[184px]" />
            <div className="absolute top-[37px] left-[35px] w-[400px] h-[102px]">
              <img
                className="absolute top-[11px] left-[0px] w-20 h-20 object-cover"
                alt=""
                src="/icons8fever64-1@2x.png"
              />
              <div className="absolute top-[0px] left-[102px] w-[298px] h-[102px]">
                <b className="absolute top-[0px] left-[-1px] leading-[23px]">
                  Sore Troath
                </b>
                <div className="absolute top-[33px] left-[-1px] text-mini leading-[23px] text-darkgray text-left">
                  <p className="m-0">Amet minim mollit non deserunt ullam</p>
                  <p className="m-0 whitespace-pre-wrap">{`est sit aliqua dolor do amet sint. Velit  `}</p>
                  <p className="m-0">consequat duis enim velit mollit.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[473px] left-[807px] w-[470px] h-[184px]">
            <div className="absolute top-[0px] left-[0px] shadow-[0px_10px_12px_rgba(190,_190,_190,_0.25)] bg-white w-[470px] h-[184px]" />
            <div className="absolute top-[37px] left-[35px] w-[400px] h-[102px]">
              <img
                className="absolute top-[11px] left-[0px] w-20 h-20 object-cover"
                alt=""
                src="/icons8fever64-1@2x.png"
              />
              <div className="absolute top-[0px] left-[102px] w-[298px] h-[102px]">
                <b className="absolute top-[0px] left-[0px] leading-[23px]">
                  Headache
                </b>
                <div className="absolute top-[33px] left-[0px] text-mini leading-[23px] text-darkgray text-left">
                  <p className="m-0">Amet minim mollit non deserunt ullam</p>
                  <p className="m-0 whitespace-pre-wrap">{`est sit aliqua dolor do amet sint. Velit  `}</p>
                  <p className="m-0">consequat duis enim velit mollit.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[716px] left-[1049px] rounded-6xl-8 bg-heading overflow-hidden flex flex-row items-center justify-center py-[12.9px] px-[32.2px] text-left text-mini text-white">
            <div className="relative capitalize">hELP LINE</div>
          </div>
        </div>
        <div className="absolute top-[4595px] left-[130px] w-[1179px] h-[538px] text-white">
          <div className="absolute top-[0px] left-[442px] text-11xl capitalize font-black text-heading">
            News and Articles
          </div>
          <div className="absolute top-[48px] left-[336px] text-mini leading-[23px] text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#808081] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-center">
            <p className="m-0">{`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. `}</p>
            <p className="m-0">{`Amet minim mollit non deserunt `}</p>
          </div>
          <div className="absolute top-[187px] left-[0px] w-[373px] h-[351px] overflow-hidden">
            <img
              className="absolute top-[2px] left-[0px] w-[373px] h-[248.6px] object-cover"
              alt=""
              src="/pexelsjepgambardella7689872-2@2x.png"
            />
            <div className="absolute top-[237px] left-[114px] w-[146px] h-8">
              <div className="absolute top-[0px] left-[0px] bg-heading w-[146px] h-8" />
              <div className="absolute top-[3px] left-[26px] leading-[23px] inline-block w-[95px] h-[27px]">
                5 Dec. 2021
              </div>
            </div>
            <div className="absolute top-[314px] left-[58px] leading-[23px] font-semibold text-heading">
              How coronavirus very contigous
            </div>
            <div className="absolute top-[282px] left-[62px] w-[249px] h-6 text-xs text-main-para">
              <div className="absolute top-[0px] left-[0px] w-20 h-6">
                <div className="absolute top-[-3px] left-[30px] leading-[23px] uppercase inline-block w-10">
                  admin
                </div>
                <img
                  className="absolute top-[-1px] left-[0px] w-5 h-5 overflow-hidden"
                  alt=""
                  src="/supervised-user-circle.svg"
                />
              </div>
              <div className="absolute top-[0px] left-[135px] w-[114px] h-6">
                <div className="absolute top-[-3px] left-[30px] leading-[23px] uppercase">
                  2 comments
                </div>
                <img
                  className="absolute top-[-1px] left-[0px] w-5 h-5 overflow-hidden"
                  alt=""
                  src="/supervised-user-circle.svg"
                />
              </div>
            </div>
          </div>
          <div className="absolute top-[187px] left-[403px] w-[373px] h-[351px] overflow-hidden">
            <img
              className="absolute top-[2px] left-[0px] w-[373px] h-[248.6px] object-cover"
              alt=""
              src="/pexelsjepgambardella7689872-21@2x.png"
            />
            <div className="absolute top-[237px] left-[114px] w-[146px] h-8">
              <div className="absolute top-[0px] left-[0px] bg-heading w-[146px] h-8" />
              <div className="absolute top-[5px] left-[21px] leading-[23px]">
                10 Dec. 2021
              </div>
            </div>
            <div className="absolute top-[314px] left-[58px] leading-[23px] font-semibold text-heading">
              How coronavirus very contigous
            </div>
            <div className="absolute top-[282px] left-[62px] w-[249px] h-6 text-xs text-main-para">
              <div className="absolute top-[0px] left-[0px] w-20 h-6">
                <div className="absolute top-[-3px] left-[30px] leading-[23px] uppercase inline-block w-10">
                  admin
                </div>
                <img
                  className="absolute top-[-1px] left-[0px] w-5 h-5 overflow-hidden"
                  alt=""
                  src="/supervised-user-circle.svg"
                />
              </div>
              <div className="absolute top-[0px] left-[135px] w-[114px] h-6">
                <div className="absolute top-[-3px] left-[30px] leading-[23px] uppercase">
                  5 comments
                </div>
                <img
                  className="absolute top-[-1px] left-[0px] w-5 h-5 overflow-hidden"
                  alt=""
                  src="/supervised-user-circle.svg"
                />
              </div>
            </div>
          </div>
          <div className="absolute top-[187px] left-[806px] w-[373px] h-[351px] overflow-hidden">
            <img
              className="absolute top-[2px] left-[0px] w-[373px] h-[248.6px] object-cover"
              alt=""
              src="/pexelsjepgambardella7689872-2@2x.png"
            />
            <div className="absolute top-[237px] left-[114px] w-[146px] h-8">
              <div className="absolute top-[0px] left-[0px] bg-heading w-[146px] h-8" />
              <div className="absolute top-[3px] left-[26px] leading-[23px] inline-block w-[95px] h-[27px]">
                5 Dec. 2021
              </div>
            </div>
            <div className="absolute top-[314px] left-[58px] leading-[23px] font-semibold text-heading">
              How coronavirus very contigous
            </div>
            <div className="absolute top-[282px] left-[62px] w-[249px] h-6 text-xs text-main-para">
              <div className="absolute top-[0px] left-[0px] w-20 h-6">
                <div className="absolute top-[-3px] left-[30px] leading-[23px] uppercase inline-block w-10">
                  admin
                </div>
                <img
                  className="absolute top-[-1px] left-[0px] w-5 h-5 overflow-hidden"
                  alt=""
                  src="/supervised-user-circle.svg"
                />
              </div>
              <div className="absolute top-[0px] left-[135px] w-[114px] h-6">
                <div className="absolute top-[-3px] left-[30px] leading-[23px] uppercase">
                  2 comments
                </div>
                <img
                  className="absolute top-[-1px] left-[0px] w-5 h-5 overflow-hidden"
                  alt=""
                  src="/supervised-user-circle.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <footer className="absolute top-[5190px] left-[0px] bg-backgroundcolor w-[1442px] h-[331px] overflow-hidden text-left text-mini text-heading font-paragraph">
          <b className="absolute top-[63px] left-[131px] text-mid leading-[23px] text-black">
            About
          </b>
          <b className="absolute top-[69px] left-[533px] text-mid leading-[23px] text-black">
            Quick Links
          </b>
          <b className="absolute top-[72px] left-[834px] text-mid leading-[23px] text-black">
            Helpful Linls
          </b>
          <b className="absolute top-[69px] left-[1140px] text-mid leading-[23px] text-black">
            Resources
          </b>
          <div className="absolute top-[104px] left-[131px] leading-[23px] text-main-para inline-block w-[302px]">
            <p className="m-0">{`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit `}</p>
            <p className="m-0">{`officia consequat duis enim velit mollit. `}</p>
          </div>
          <img
            className="absolute top-[226px] left-[131px] w-[25px] h-[25px]"
            alt=""
            src="/facebook.svg"
          />
          <img
            className="absolute top-[226px] left-[176px] w-[25px] h-[25px]"
            alt=""
            src="/twitter.svg"
          />
          <img
            className="absolute top-[226px] left-[221px] w-[25px] h-[25px] object-cover"
            alt=""
            src="/instagram@2x.png"
          />
          <img
            className="absolute top-[226px] left-[266px] w-[25px] h-[25px]"
            alt=""
            src="/youtube.svg"
          />
          <div className="absolute top-[106px] left-[533px] leading-[23px]">
            Symptoms
          </div>
          <div className="absolute top-[109px] left-[834px] leading-[23px]">
            Healthcare Professional
          </div>
          <div className="absolute top-[106px] left-[1140px] leading-[23px]">
            WHO Website
          </div>
          <div className="absolute top-[139px] left-[533px] leading-[23px]">
            Prevention
          </div>
          <div className="absolute top-[142px] left-[834px] leading-[23px]">
            LGU Facilities
          </div>
          <div className="absolute top-[139px] left-[1140px] leading-[23px]">
            CDC Website
          </div>
          <div className="absolute top-[172px] left-[533px] leading-[23px]">
            FAQs
          </div>
          <div className="absolute top-[175px] left-[834px] leading-[23px]">
            Protect Your Family
          </div>
          <div className="absolute top-[172px] left-[1140px] leading-[23px]">
            Gov Website
          </div>
          <div className="absolute top-[205px] left-[533px] leading-[23px]">
            About Coronavirus
          </div>
          <div className="absolute top-[208px] left-[834px] leading-[23px]">
            World Health
          </div>
          <div className="absolute top-[205px] left-[1140px] leading-[23px]">
            DOH Website
          </div>
          <div className="absolute top-[238px] left-[533px] leading-[23px]">
            Contact Us
          </div>
        </footer>
      </div>
    </section>
  );
};

Design.propTypes = {
  className: PropTypes.string,
};

export default Design;
