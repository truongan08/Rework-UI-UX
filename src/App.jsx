import "./App.css";

function App() {
  return (
    <div className="homepage">
      <div className="homepage__hero">
        <div className="homepage__hero-top">
          <span className="homepage__hero-top-logo">Shoppes</span>

          <ul className="homepage__hero-top-menu">
            <li className="homepage__hero-top-menu-item">Home</li>
            <li className="homepage__hero-top-menu-item">Shop</li>
            <li className="homepage__hero-top-menu-item">Wishlist</li>
            <li className="homepage__hero-top-menu-item">Order Tracking</li>
            <li className="homepage__hero-top-menu-item">Blogs</li>
          </ul>

          <div className="homepage__hero-top-search">
            <div className="homepage__hero-top-search-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.78234 1.6665C14.2573 1.6665 17.8973 5.3065 17.8973 9.7815C17.8973 11.8928 17.0871 13.8184 15.7612 15.2636L18.3702 17.8671C18.6143 18.1113 18.6152 18.5063 18.371 18.7504C18.2493 18.8738 18.0885 18.9346 17.9285 18.9346C17.7693 18.9346 17.6093 18.8738 17.4868 18.7521L14.8464 16.119C13.4574 17.2314 11.6962 17.8973 9.78234 17.8973C5.30734 17.8973 1.6665 14.2565 1.6665 9.7815C1.6665 5.3065 5.30734 1.6665 9.78234 1.6665ZM9.78234 2.9165C5.9965 2.9165 2.9165 5.99567 2.9165 9.7815C2.9165 13.5673 5.9965 16.6473 9.78234 16.6473C13.5673 16.6473 16.6473 13.5673 16.6473 9.7815C16.6473 5.99567 13.5673 2.9165 9.78234 2.9165Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="homepage__hero-top-search-title">Search</div>
          </div>
          <button className="homepage__hero-top-login">Login</button>
          <button className="homepage__hero-top-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M9.99985 11.1376C9.13253 11.1386 8.29167 10.839 7.62046 10.2897C6.94924 9.7404 6.48917 8.97544 6.3186 8.12506C6.305 8.03549 6.31105 7.94403 6.33631 7.85702C6.36157 7.77001 6.40544 7.68953 6.46489 7.62116C6.52435 7.55279 6.59795 7.49817 6.68061 7.46107C6.76327 7.42397 6.853 7.40529 6.9436 7.40632C7.0925 7.40415 7.23727 7.45522 7.35186 7.55032C7.46644 7.64543 7.5433 7.77832 7.5686 7.92507C7.68631 8.48689 7.99377 8.99109 8.43934 9.35299C8.88491 9.71488 9.44145 9.91242 10.0155 9.91242C10.5895 9.91242 11.146 9.71488 11.5916 9.35299C12.0372 8.99109 12.3446 8.48689 12.4624 7.92507C12.4877 7.77832 12.5645 7.64543 12.6791 7.55032C12.7937 7.45522 12.9385 7.40415 13.0874 7.40632C13.1779 7.40529 13.2677 7.42397 13.3503 7.46107C13.433 7.49817 13.5066 7.55279 13.5661 7.62116C13.6255 7.68953 13.6694 7.77001 13.6946 7.85702C13.7199 7.94403 13.7259 8.03549 13.7124 8.12506C13.5408 8.98073 13.0761 9.74976 12.3984 10.2997C11.7208 10.8495 10.8725 11.1459 9.99985 11.1376Z"
                fill="white"
              />
              <path
                d="M15.5624 19.3749H4.4374C4.18308 19.3752 3.93136 19.3238 3.69754 19.2238C3.46372 19.1237 3.25269 18.9772 3.0773 18.793C2.90191 18.6089 2.76581 18.3909 2.67729 18.1525C2.58878 17.9141 2.54969 17.6602 2.5624 17.4062L3.06865 6.63115C3.08961 6.14809 3.29636 5.69179 3.64575 5.35755C3.99513 5.0233 4.46014 4.83695 4.94366 4.8374H15.0562C15.5397 4.83695 16.0047 5.0233 16.3541 5.35755C16.7035 5.69179 16.9102 6.14809 16.9312 6.63115L17.4374 17.4062C17.4501 17.6602 17.411 17.9141 17.3225 18.1525C17.234 18.3909 17.0979 18.6089 16.9225 18.793C16.7471 18.9772 16.5361 19.1237 16.3023 19.2238C16.0685 19.3238 15.8167 19.3752 15.5624 19.3749ZM4.94366 6.09365C4.77789 6.09365 4.61892 6.1595 4.50171 6.27671C4.3845 6.39392 4.31865 6.55289 4.31865 6.71865L3.8124 17.4687C3.80817 17.5533 3.8212 17.638 3.8507 17.7174C3.88021 17.7969 3.92557 17.8696 3.98404 17.9309C4.0425 17.9923 4.11284 18.0412 4.19078 18.0745C4.26872 18.1079 4.35263 18.125 4.4374 18.1249H15.5624C15.6472 18.125 15.7311 18.1079 15.809 18.0745C15.887 18.0412 15.9573 17.9923 16.0158 17.9309C16.0742 17.8696 16.1196 17.7969 16.1491 17.7174C16.1786 17.638 16.1916 17.5533 16.1874 17.4687L15.6812 6.69365C15.6812 6.52789 15.6153 6.36892 15.4981 6.25171C15.3809 6.1345 15.2219 6.06865 15.0562 6.06865L4.94366 6.09365Z"
                fill="white"
              />
              <path
                d="M13.75 5.46875H12.5V4.375C12.5 3.71196 12.2366 3.07607 11.7678 2.60723C11.2989 2.13839 10.663 1.875 10 1.875C9.33696 1.875 8.70107 2.13839 8.23223 2.60723C7.76339 3.07607 7.5 3.71196 7.5 4.375V5.46875H6.25V4.375C6.25 3.38044 6.64509 2.42661 7.34835 1.72335C8.05161 1.02009 9.00544 0.625 10 0.625C10.9946 0.625 11.9484 1.02009 12.6517 1.72335C13.3549 2.42661 13.75 3.38044 13.75 4.375V5.46875Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <div className="homepage__hero-banner">
          <div className="homepage__hero-banner-titledesc">
            <h2 className="homepage__hero-banner-titledesc-subtitle">
              Road Racing Shoes
            </h2>
            <h1 className="homepage__hero-banner-titledesc-title">
              Nike ZoomX Streakfly
            </h1>
            <p className="homepage__hero-banner-titledesc-desc">
              Our lightest racing shoe, the Nike ZoomX Streakfly is all about
              the speed you need to take on the competition in a mile, 5K or 10K
              race.
            </p>
          </div>
          <div className="homepage__hero-banner-qsp">
            <button className="homepage__hero-banner-qsp-quantity">
              <div className="homepage__hero-banner-qsp-quantity-title">
                QNT
              </div>
              <div className="homepage__hero-banner-qsp-quantity-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M7.99996 10.6666C7.91222 10.6671 7.82524 10.6503 7.74402 10.6172C7.66279 10.584 7.58892 10.5351 7.52662 10.4733L3.52663 6.4733C3.40109 6.34776 3.33057 6.1775 3.33057 5.99996C3.33057 5.82243 3.40109 5.65216 3.52663 5.52663C3.65216 5.40109 3.82243 5.33057 3.99996 5.33057C4.17749 5.33057 4.34776 5.40109 4.47329 5.52663L7.99996 9.05997L11.5266 5.53329C11.6542 5.42408 11.8182 5.36701 11.986 5.37349C12.1538 5.37997 12.3129 5.44952 12.4317 5.56825C12.5504 5.68698 12.6199 5.84614 12.6264 6.01393C12.6329 6.18171 12.5758 6.34576 12.4666 6.4733L8.46662 10.4733C8.34245 10.5965 8.17485 10.6659 7.99996 10.6666Z"
                    fill="#100D22"
                  />
                </svg>
              </div>
            </button>
            <button className="homepage__hero-banner-qsp-size">
              <div className="homepage__hero-banner-qsp-size-title">SIZE</div>
              <div className="homepage__hero-banner-qsp-size-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M7.99996 10.6666C7.91222 10.6671 7.82524 10.6503 7.74402 10.6172C7.66279 10.584 7.58892 10.5351 7.52662 10.4733L3.52663 6.4733C3.40109 6.34776 3.33057 6.1775 3.33057 5.99996C3.33057 5.82243 3.40109 5.65216 3.52663 5.52663C3.65216 5.40109 3.82243 5.33057 3.99996 5.33057C4.17749 5.33057 4.34776 5.40109 4.47329 5.52663L7.99996 9.05997L11.5266 5.53329C11.6542 5.42408 11.8182 5.36701 11.986 5.37349C12.1538 5.37997 12.3129 5.44952 12.4317 5.56825C12.5504 5.68698 12.6199 5.84614 12.6264 6.01393C12.6329 6.18171 12.5758 6.34576 12.4666 6.4733L8.46662 10.4733C8.34245 10.5965 8.17485 10.6659 7.99996 10.6666Z"
                    fill="#100D22"
                  />
                </svg>
              </div>
            </button>
            <div className="homepage__hero-banner-qsp-price">$173</div>
          </div>
          <div className="homepage__hero-banner-add">
            <button className="homepage__hero-banner-add-addtobag">
              Add To Bag
            </button>
            <a href="#" className="homepage__hero-banner-add-seedetail">
              See Details
            </a>
          </div>
          <div className="homepage__hero-banner-img">
            <img src="/src/assets/img.png" alt="img" />
          </div>
          <div className="homepage__hero-banner-listimg">
            <img
              src="/src/assets/img1.png"
              alt="img1"
              className="homepage__hero-banner-listimg-item"
            />
            <img
              src="/src/assets/img2.png"
              alt="img2"
              className="homepage__hero-banner-listimg-item"
            />
            <img
              src="/src/assets/img3.png"
              alt="img3"
              className="homepage__hero-banner-listimg-item"
            />
            <img
              src="/src/assets/img4.png"
              alt="img4"
              className="homepage__hero-banner-listimg-item"
            />
          </div>
        </div>
        <div className="homepage__hero-bg"></div>
      </div>

      <div className="homepage__data">
        <div className="homepage__data-item">
          <div className="homepage__data-item-number">500+</div>
          <div className="homepage__data-item-title">Amazing products</div>
        </div>
        <div className="homepage__data-item">
          <div className="homepage__data-item-number">40k+</div>
          <div className="homepage__data-item-title">Orders Complated</div>
        </div>
        <div className="homepage__data-item">
          <div className="homepage__data-item-number">32k+</div>
          <div className="homepage__data-item-title">Happy Customers</div>
        </div>
      </div>
      <div className="homepage__whychooseus">
        <div className="homepage__whychooseus-title">Why Choose Us</div>
        <div className="homepage__whychooseus-list">
          <div className="homepage__whychooseus-list-item">
            <div className="homepage__whychooseus-list-item-icon">
              <img src="/src/assets/delivery.svg" alt="delivery" />
            </div>
            <div className="homepage__whychooseus-list-item-title">
              Free Shipping
            </div>
            <div className="homepage__whychooseus-list-item-desc">
              Velit officia consequat duis enim velit mollit. Exercitation
              veniam consequat sunt nostrud amet.
            </div>
          </div>
          <div className="homepage__whychooseus-list-item">
            <div className="homepage__whychooseus-list-item-icon">
              <img src="/src/assets/verified.svg" alt="verified" />
            </div>
            <div className="homepage__whychooseus-list-item-title">
              100% Secure Payment
            </div>
            <div className="homepage__whychooseus-list-item-desc">
              Velit officia consequat duis enim velit mollit. Exercitation
              veniam consequat sunt nostrud amet.
            </div>
          </div>
          <div className="homepage__whychooseus-list-item">
            <div className="homepage__whychooseus-list-item-icon">
              <img
                src="/src/assets/24-hours-support.svg"
                alt="24-hours-support"
              />
            </div>
            <div className="homepage__whychooseus-list-item-title">
              24/7 Dedicated Support
            </div>
            <div className="homepage__whychooseus-list-item-desc">
              Velit officia consequat duis enim velit mollit. Exercitation
              veniam consequat sunt nostrud amet.
            </div>
          </div>
        </div>
      </div>
      <div className="homepage__favouritesonthisweek">
        <div className="homepage__favouritesonthisweek-title">
          Favourites on This Week
        </div>
        <div className="homepage__favouritesonthisweek-list">
          <div className="homepage__favouritesonthisweek-list-item">
            <div className="homepage__favouritesonthisweek-list-item-image">
              <img src="\src\assets\favourite1.png" alt="favourite1" />
            </div>
            <div className="homepage__favouritesonthisweek-list-item-wrapper">
              <span className="homepage__favouritesonthisweek-list-item-wrapper-title">
                Nike Air Max 2021
              </span>
              <span className="homepage__favouritesonthisweek-list-item-wrapper-price">
                $213
              </span>
            </div>
            <div className="homepage__favouritesonthisweek-list-item-subtitle">
              Men&apos;s Shoes
            </div>
          </div>
          <div className="homepage__favouritesonthisweek-list-item">
            <div className="homepage__favouritesonthisweek-list-item-image">
              <img src="\src\assets\favourite2.png" alt="favourite2" />
            </div>
            <div className="homepage__favouritesonthisweek-list-item-wrapper">
              <span className="homepage__favouritesonthisweek-list-item-wrapper-title">
                Nike Air Max 2021
              </span>
              <span className="homepage__favouritesonthisweek-list-item-wrapper-price">
                $213
              </span>
            </div>
            <div className="homepage__favouritesonthisweek-list-item-subtitle">
              Men&apos;s Shoes
            </div>
          </div>
          <div className="homepage__favouritesonthisweek-list-item">
            <div className="homepage__favouritesonthisweek-list-item-image">
              <img src="\src\assets\favourite3.png" alt="favourite3" />
            </div>
            <div className="homepage__favouritesonthisweek-list-item-wrapper">
              <span className="homepage__favouritesonthisweek-list-item-wrapper-title">
                Nike Air Max 2021
              </span>
              <span className="homepage__favouritesonthisweek-list-item-wrapper-price">
                $213
              </span>
            </div>
            <div className="homepage__favouritesonthisweek-list-item-subtitle">
              Men&apos;s Shoes
            </div>
          </div>
          <div className="homepage__favouritesonthisweek-list-item">
            <div className="homepage__favouritesonthisweek-list-item-image">
              <img src="\src\assets\favourite4.png" alt="favourite4" />
            </div>
            <div className="homepage__favouritesonthisweek-list-item-wrapper">
              <span className="homepage__favouritesonthisweek-list-item-wrapper-title">
                Nike Air Max 2021
              </span>
              <span className="homepage__favouritesonthisweek-list-item-wrapper-price">
                $213
              </span>
            </div>
            <div className="homepage__favouritesonthisweek-list-item-subtitle">
              Men&apos;s Shoes
            </div>
          </div>
        </div>
      </div>
      <div className="homepage__trustby">
        <div className="homepage__trustby-listlogo">
          <div className="homepage__trustby-listlogo-item">
            <img
              src="src\assets\logo1.png"
              alt="logo1"
              className="homepage__trustby-listlogo-item-image"
            />
          </div>
          <div className="homepage__trustby-listlogo-item">
            <img
              src="src\assets\logo2.png"
              alt="logo2"
              className="homepage__trustby-listlogo-item-image"
            />
          </div>
          <div className="homepage__trustby-listlogo-item">
            <img
              src="src\assets\logo3.png"
              alt="logo3"
              className="homepage__trustby-listlogo-item-image"
            />
          </div>
          <div className="homepage__trustby-listlogo-item">
            <img
              src="src\assets\logo4.png"
              alt="logo4"
              className="homepage__trustby-listlogo-item-image"
            />
          </div>
          <div className="homepage__trustby-listlogo-item">
            <img
              src="src\assets\logo5.png"
              alt="logo5"
              className="homepage__trustby-listlogo-item-image"
            />
          </div>
        </div>
      </div>
      <div className="homepage__whattrendnow">
        <div className="homepage__whattrendnow-title">
          What&apos;s Trending Now
        </div>
        <div className="homepage__whattrendnow-list">
          <div className="homepage__whattrendnow-list-item">
            <div className="homepage__whattrendnow-list-item-image">
              <img src="/src/assets/trending1.png" alt="trending1" />
            </div>
            <div className="homepage__whattrendnow-list-item-wrapper">
              <span className="homepage__whattrendnow-list-item-wrapper-title">
                Nike Air Max INTRLK
              </span>
              <span className="homepage__whattrendnow-list-item-wrapper-price">
                $213
              </span>
            </div>
            <div className="homepage__whattrendnow-list-item-subtitle">
              Men&apos;s Shoes
            </div>
          </div>
          <div className="homepage__whattrendnow-list-item">
            <div className="homepage__whattrendnow-list-item-image">
              <img src="/src/assets/trending2.png" alt="trending2" />
            </div>
            <div className="homepage__whattrendnow-list-item-wrapper">
              <span className="homepage__whattrendnow-list-item-wrapper-title">
                Nike Air Max INTRLK
              </span>
              <span className="homepage__whattrendnow-list-item-wrapper-price">
                $213
              </span>
            </div>
            <div className="homepage__whattrendnow-list-item-subtitle">
              Men&apos;s Shoes
            </div>
          </div>
        </div>
      </div>
      <div className="homepage__sharewithshoppe">
        <div className="homepage__sharewithshoppe-title">
          Share With #Shoppes
        </div>
        <div className="homepage__sharewithshoppe-subtitle">
          Follow <span>@shoppes</span> instagram for inspirations
        </div>
        <div className="homepage__sharewithshoppe-list">
          <img
            src="src\assets\share1.png"
            alt="share1"
            className="homepage__sharewithshoppe-list-item"
          />
          <img
            src="src\assets\share2.png"
            alt="share2"
            className="homepage__sharewithshoppe-list-item"
          />
          <img
            src="src\assets\share3.png"
            alt="share3"
            className="homepage__sharewithshoppe-list-item"
          />
          <img
            src="src\assets\share4.png"
            alt="share4"
            className="homepage__sharewithshoppe-list-item"
          />
          <img
            src="src\assets\share5.png"
            alt="share5"
            className="homepage__sharewithshoppe-list-item"
          />
          <img
            src="src\assets\share6.png"
            alt="share6"
            className="homepage__sharewithshoppe-list-item"
          />
        </div>
      </div>
      <div className="homepage__lastestfromblogs">
        <div className="homepage__lastestfromblogs-title">
          Latest From Blogs
        </div>
        <div className="homepage__lastestfromblogs-subtitle">
          Velit officia consequat duis enim velit mollit. Exercitation veniam co
        </div>
        <div className="homepage__lastestfromblogs-list">
          <div className="homepage__lastestfromblogs-list-item">
            <img
              src="src\assets\latest1.png"
              alt="latest1"
              className="homepage__lastestfromblogs-list-item-img"
            />
            <div className="homepage__lastestfromblogs-list-item-title">
              Lorem ipsum dolor sit amet
            </div>
            <div className="homepage__lastestfromblogs-list-item-subtitle">
              Velit officia consequat duis enim velit mollit. Exercitation
              veniam consequat sunt nostrud amet.
            </div>
            <div className="homepage__lastestfromblogs-list-item-info">
              <img
                src="src\assets\avatar-latest1.svg"
                alt="avatar-latest1"
                className="homepage__lastestfromblogs-list-item-info-avatar"
              />
              <div className="homepage__lastestfromblogs-list-item-info-wrapper">
                <div className="homepage__lastestfromblogs-list-item-info-wrapper-name">
                  Cameron Williamson
                </div>
                <div className="homepage__lastestfromblogs-list-item-info-wrapper-time">
                  8/2/19
                </div>
              </div>
            </div>
          </div>
          <div className="homepage__lastestfromblogs-list-item">
            <img
              src="src\assets\latest2.png"
              alt="latest2"
              className="homepage__lastestfromblogs-list-item-img"
            />
            <div className="homepage__lastestfromblogs-list-item-title">
              Lorem ipsum dolor sit amet
            </div>
            <div className="homepage__lastestfromblogs-list-item-subtitle">
              Velit officia consequat duis enim velit mollit. Exercitation
              veniam consequat sunt nostrud amet.
            </div>
            <div className="homepage__lastestfromblogs-list-item-info">
              <img
                src="src\assets\avatar-latest2.svg"
                alt="avatar-latest2"
                className="homepage__lastestfromblogs-list-item-info-avatar"
              />
              <div className="homepage__lastestfromblogs-list-item-info-wrapper">
                <div className="homepage__lastestfromblogs-list-item-info-wrapper-name">
                  Cameron Williamson
                </div>
                <div className="homepage__lastestfromblogs-list-item-info-wrapper-time">
                  8/2/19
                </div>
              </div>
            </div>
          </div>
          <div className="homepage__lastestfromblogs-list-item">
            <img
              src="src\assets\latest3.png"
              alt="latest3"
              className="homepage__lastestfromblogs-list-item-img"
            />
            <div className="homepage__lastestfromblogs-list-item-title">
              Lorem ipsum dolor sit amet
            </div>
            <div className="homepage__lastestfromblogs-list-item-subtitle">
              Velit officia consequat duis enim velit mollit. Exercitation
              veniam consequat sunt nostrud amet.
            </div>
            <div className="homepage__lastestfromblogs-list-item-info">
              <img
                src="src\assets\avatar-latest3.svg"
                alt="avatar-latest3"
                className="homepage__lastestfromblogs-list-item-info-avatar"
              />
              <div className="homepage__lastestfromblogs-list-item-info-wrapper">
                <div className="homepage__lastestfromblogs-list-item-info-wrapper-name">
                  Cameron Williamson
                </div>
                <div className="homepage__lastestfromblogs-list-item-info-wrapper-time">
                  8/2/19
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="homepage__subscribe">
        <div className="homepage__subscribe-title"></div>
        <div className="homepage__subscribe-subtitle"></div>
        <div className="homepage__subscribe-input">
          <div className="homepage__subscribe-input-email"></div>
          <div className="homepage__subscribe-input-subcribe"></div>
        </div>
      </div>
      <div className="homepage__footer">
        <div className="homepage__footer-logo"></div>
        <div className="homepage__footer-contact">
          <div className="homepage__footer-contact-item">
            <div className="homepage__footer-contact-item-title"></div>
            <div className="homepage__footer-contact-item-subtitle"></div>
          </div>
          <div className="homepage__footer-contact-item">
            <div className="homepage__footer-contact-item-title"></div>
            <div className="homepage__footer-contact-item-subtitle"></div>
          </div>
          <div className="homepage__footer-contact-item">
            <div className="homepage__footer-contact-item-title"></div>
            <div className="homepage__footer-contact-item-subtitle"></div>
          </div>
        </div>
        <div className="homepage__footer-menu">
          <div className="homepage__footer-menu-title"></div>
          <div className="homepage__footer-menu-item"></div>
          <div className="homepage__footer-menu-item"></div>
          <div className="homepage__footer-menu-item"></div>
          <div className="homepage__footer-menu-item"></div>
          <div className="homepage__footer-menu-item"></div>
        </div>
        <div className="homepage__footer-link">
          <div className="homepage__footer-link-title"></div>
          <div className="homepage__footer-link-item"></div>
          <div className="homepage__footer-link-item"></div>
          <div className="homepage__footer-link-item"></div>
        </div>
        <div className="homepage__footer-input">
          <div className="homepage__footer-input-item">
            <div className="homepage__footer-input-item-title"></div>
            <div className="homepage__footer-input-item-span"></div>
          </div>
          <div className="homepage__footer-input-item">
            <div className="homepage__footer-input-item-title"></div>
            <div className="homepage__footer-input-item-span"></div>
          </div>
          <div className="homepage__footer-slogan"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
