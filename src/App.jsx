import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import { Map, Circle, InfoWindow } from "react-amap";
SwiperCore.use([Pagination]);
class App extends React.Component {
  imgList = [
    require("./static/images/swiper1.png").default,
    require("./static/images/swiper2.png").default,
    require("./static/images/swiper3.png").default,
  ];
  strengthsMsg = [
    {
      title: "多对一专精服务",
      text: "同时提供多名律师为同一个用户服务，人资、财税、贸易合同等",
    },
    {
      title: "高性价比服务",
      text: "采用共享模式，使律师碎片化时间产生价值，降低用户获得法律服务的成本",
    },
    {
      title: "响应迅速服务",
      text: "按需求为您匹配对应领域的专业律师，不同专业律师同时在线，不用等候",
    },
    {
      title: "职业律师专业服务",
      text: "持证律师全程解答，回复及时确保服务质量，省时省力更放心",
    },
    {
      title: "量化可视化服务",
      text: "量化所有服务产品，服务过程可视化，用户可溯源，每一笔费用清晰明了",
    },
    {
      title: "全国属地化服务",
      text: "汇聚全国各地区律师资源，为用户提供更好的属地化服务",
    },
  ];

  setStr = () => {
    return this.strengthsMsg.map((res, ind) => {
      return (
        <li key={ind}>
          <img
            src={require(`./static/images/our${ind + 1}.png`).default}
            alt=""
          />
          <p>{res.title}</p>
          <span>{res.text}</span>
        </li>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div className="headerImg">
          <img src={require("./static/images/totu.png").default} alt="" />
        </div>
        <Swiper
          spaceBetween={-10}
          slidesPerView={3}
          autoplay={500}
          centeredSlides={true}
          loop={true}
          pagination={{ clickable: true }}
        >
          {this.imgList.map((item, ind) => {
            return (
              <SwiperSlide key={ind}>
                <img src={item} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="aboutus">
          <p>
            江苏衡卓咨询服务有限公司（下称“衡卓”）于2017年成立，是一家面向中小微企业提供全生命周期的法律服务的专业服务机构。
          </p>
          <p>
            衡卓一直以来奉行“专业让服务更高效”的宗旨，创新性的提出了企业经营健康指数化的概念，致力于全生命周期式陪伴企业发展。凭借强大的律师团队，助力企业优化架构，不断迭代升级。从而打造专业化、全面化、效率化的复合型法律咨询服务模式。
          </p>
          <p>
            衡卓始终坚持一站式解决企业发展中产生的法务相关问题，帮助企业建立以法律为依托，从而为企业可持续化高效发展赋能，规避企业经营中可能出现的合规风险的管理模式，提高资源利用率，打造优质的客户服务体验，建立以信任为基石的强合作。
          </p>
        </div>
        <div className="strengths">
          <div className="pictitle">
            <div className="bcolor"></div>
            <h3>我们的优势</h3>
            <h4>OUR STRENGTHS</h4>
          </div>
          <div className="strengthsList">
            <ul>{this.setStr()}</ul>
          </div>
        </div>
        <div className="address">
          <div className="addressTitle">
            <p>公司地址</p>
            <span>COMPANY ADDRESS</span>
          </div>
          <div className="adressMap" id="container">
            <Map
              amapkey={"e5d2c34f3f824cad7f0bee2296582013"}
              zoom={18}
              center={[120.307011, 31.486173]}
            >
              {/* <Marker position={[120.307011, 31.486173]} /> */}
              <Circle
                center={[120.307151, 31.486012]}
                radius={30}
                style={{
                  strokeColor: "#3296FA",
                  strokeWeight: 1,
                  fillColor: "rgba(50,150,250,0.2)",
                }}
              />
              <Circle
                center={[120.307151, 31.486012]}
                radius={2}
                style={{
                  strokeColor: "#3296FA",
                  strokeWeight: 1,
                  fillColor: "#1B8FFF",
                }}
              />
              <InfoWindow
                position={[120.307151, 31.486032]}
                visible={true}
                isCustom={true}
              >
                <div className="infoWindow">
                  <img
                    src={require("./static/images/minilogo.png").default}
                    alt=""
                  />
                  <b>江苏衡卓咨询</b>
                </div>
              </InfoWindow>
            </Map>
            ,
          </div>
          <div className="companyMsg">
            <div>
              <span>
                <svg
                  t="1621906779689"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="1943"
                  width="16"
                  height="16"
                >
                  <path
                    d="M512 96c181.952 0 333.376 137.408 355.584 313.6h2.816a89.92 89.92 0 0 1 89.44 84.16l0.16 5.44v89.6c0 49.28-40.32 89.6-89.6 89.6 0 120.64-96.64 219.776-216.32 223.872l-7.68 0.128h-56.768a89.568 89.568 0 0 1-167.232-44.8 89.6 89.6 0 0 1 167.2-44.8H646.4a134.56 134.56 0 0 0 134.24-127.68l0.16-6.72v-224l-0.128-8.032C776.384 302.208 657.152 185.6 512 185.6c-145.152 0-264.384 116.608-268.672 260.768L243.2 454.4v179.2c0 23.2-17.856 42.4-40.512 44.608L198.4 678.4H153.6a89.92 89.92 0 0 1-89.44-84.16L64 588.8v-89.6a89.92 89.92 0 0 1 84.16-89.44l5.44-0.16h2.816C178.624 233.408 330.048 96 512 96z"
                    fill="#ffffff"
                    p-id="1944"
                  ></path>
                </svg>
              </span>
              <span>客服热线：</span>
              <b>4009288830</b>
            </div>
            <div>
              <span>
                <svg
                  t="1621906816704"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2959"
                  width="16"
                  height="16"
                >
                  <path
                    d="M956.158976 761.816064c-3.943424 17.17248-8.088576 30.68416-12.438528 40.528896-20.640768 33.867776-32.388096 40.635392-72.27904 62.732288-37.139456 20.128768-73.872384 30.19264-110.204928 30.19264-10.66496 0-171.784192 17.701888-415.625216-217.515008C101.771264 442.541056 127.888384 273.23904 127.860736 262.5792c0-36.289536 10.077184-72.9856 30.22336-110.084096 22.120448-39.851008 29.372416-50.075648 62.800896-72.20224 19.182592-8.101888 23.410688-8.481792 40.574976-12.424192 17.169408-3.938304 26.44992-3.150848 26.44992-3.150848 15.343616-0.538624 34.282496 9.650176 42.298368 22.755328l82.341888 134.593536c8.020992 13.108224 12.239872 35.977216 8.921088 50.967552 0 0-1.221632 13.530112-7.143424 19.20512-5.924864 5.677056-23.5008 22.664192-36.750336 32.540672-13.244416 9.872384-25.493504 20.328448-36.747264 31.364096-11.246592 11.034624-16.873472 20.115456-16.873472 27.236352 0 3.561472 0.98816 8.006656 2.960384 13.334528 1.969152 5.326848 3.652608 9.3696 5.042176 12.121088 1.389568 2.752512 4.159488 7.486464 8.305664 14.208 4.146176 6.718464 6.418432 10.466304 6.825984 11.24864 30.03392 54.068224 64.402432 100.438016 103.108608 139.098112 38.705152 38.66624 85.12512 72.997888 139.251712 103.000064 0.78336 0.40448 4.535296 2.679808 11.261952 6.821888 6.725632 4.141056 11.464704 6.902784 14.222336 8.291328 2.752512 1.389568 6.79936 3.068928 12.135424 5.040128 5.331968 1.973248 9.782272 2.95424 13.348864 2.95424 7.102464 0 16.191488-5.615616 27.262976-16.85504 11.07456-11.241472 21.540864-23.474176 31.399936-36.70528 9.858048-13.236224 20.71552-25.472 32.576512-36.711424 11.854848-11.2384 4.98688-4.186112 4.98688-4.186112 13.602816-6.998016 35.406848-6.422528 48.69632 1.27488l150.99392 87.491584c13.290496 7.7056 23.769088 26.394624 23.008256 41.740288C959.34464 735.54944 960.100352 744.643584 956.158976 761.816064L956.158976 761.816064zM956.158976 761.816064"
                    p-id="2960"
                    fill="#ffffff"
                  ></path>
                </svg>
              </span>
              <span>接听时间：</span>
              <b>工作日9:00~18:00</b>
            </div>
            <div>
              <span>
                <svg
                  t="1621906860321"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="4614"
                  width="16"
                  height="16"
                >
                  <path
                    d="M805.055308 165.31325A343.29757 343.29757 0 0 0 524.671069 0h-29.467602a334.38362 334.38362 0 0 0-262.335332 144.096577 348.380731 348.380731 0 0 0-47.074496 303.737313 322.52291 322.52291 0 0 0 22.100702 51.568305l260.640945 498.96018a45.23277 45.23277 0 0 0 41.033637 25.636815 45.23277 45.23277 0 0 0 40.959967-25.710484l270.586261-517.377432 0.589352-1.105035a327.827079 327.827079 0 0 0-16.649195-314.492989zM511.778993 469.050564a125.237311 125.237311 0 1 1 125.237311-125.237311 125.237311 125.237311 0 0 1-125.237311 125.237311z"
                    fill="#ffffff"
                    p-id="4615"
                  ></path>
                </svg>
              </span>
              <span>公司地址：</span>
              <p>无锡市滨湖区金融三街太湖新城置业大厦21楼</p>
              <p>无锡市江阴市滨江西路8号3号楼国家软件园1618室</p>
            </div>
          </div>
          <div className='code'>
            <div>
              <img src={require("./static/images/app.png").default} alt="" />
              <p>下载法+APP</p>
            </div>
            <div>
              <img src={require("./static/images/xcx.png").default} alt="" />
              <p>扫一扫法+微信小程序</p>
            </div>
            <div>
              <img src={require("./static/images/gzh.png").default} alt="" />
              <p>关注微信公众号</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
