import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslate } from "../core/Translate";
export default function Header() {
  const { login } = useSelector((state) => state.user);
  const { listCart } = useSelector((state) => state.cart);
  let { lang, t, setLang } = useTranslate();

  function changeLang(lang) {
    setLang(lang);
  }

  return (
    <>
      {/* Sidebar */}
      {/* Size Chart */}
      <div
        className="modal fade"
        id="modalSizeChart"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            {/* Close */}
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <i className="fe fe-x" aria-hidden="true" />
            </button>
            {/* Header*/}
            <div className="modal-header line-height-fixed font-size-lg">
              <strong className="mx-auto">Size Chart</strong>
            </div>
            {/* Body */}
            <div className="modal-body border-bottom">
              {/* Header */}
              <div className="d-flex mb-7">
                {/* Heading */}
                <h5 className="mb-0">Clothing</h5>
                {/* Toggles */}
                <div
                  className="btn-group btn-group-toggle ml-auto"
                  data-toggle="buttons"
                >
                  <label className="btn btn-xxs btn-circle btn-outline-dark font-size-xxxs rounded-0 active">
                    <input
                      type="radio"
                      name="modalSizeChartUnitOne"
                      defaultChecked
                    />{" "}
                    IN
                  </label>
                  <label className="btn btn-xxs btn-circle btn-outline-dark font-size-xxxs rounded-0 ml-2">
                    <input type="radio" name="modalSizeChartUnitOne" /> CM
                  </label>
                </div>
              </div>
              {/* Table */}
              <div className="table-responsive">
                <table className="table table-bordered table-sm table-hover mb-0">
                  <thead>
                    <tr>
                      <th>Size</th>
                      <th>US</th>
                      <th>Bust</th>
                      <th>Waist</th>
                      <th>Hips</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>XS</td>
                      <td>2</td>
                      <td>32</td>
                      <td>24 - 25</td>
                      <td>33 - 34</td>
                    </tr>
                    <tr>
                      <td>S</td>
                      <td>4</td>
                      <td>34 - 35</td>
                      <td>26 - 27</td>
                      <td>35 - 26</td>
                    </tr>
                    <tr>
                      <td>M</td>
                      <td>6</td>
                      <td>36 - 37</td>
                      <td>28 - 29</td>
                      <td>38 - 40</td>
                    </tr>
                    <tr>
                      <td>L</td>
                      <td>8</td>
                      <td>38 - 29</td>
                      <td>30 - 31</td>
                      <td>42 - 44</td>
                    </tr>
                    <tr>
                      <td>XL</td>
                      <td>10</td>
                      <td>40 - 41</td>
                      <td>32 - 33</td>
                      <td>45 - 47</td>
                    </tr>
                    <tr>
                      <td>XXL</td>
                      <td>12</td>
                      <td>42 - 43</td>
                      <td>34 - 35</td>
                      <td>48 - 50</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Body */}
            <div className="modal-body">
              {/* Header */}
              <div className="d-flex mb-7">
                {/* Heading */}
                <h5 className="mb-0">Shoes</h5>
                {/* Toggles */}
                <div
                  className="btn-group btn-group-toggle ml-auto"
                  data-toggle="buttons"
                >
                  <label className="btn btn-xxs btn-circle btn-outline-dark font-size-xxxs rounded-0 active">
                    <input
                      type="radio"
                      name="modalSizeCharUnitTwo"
                      defaultChecked
                    />{" "}
                    IN
                  </label>
                  <label className="btn btn-xxs btn-circle btn-outline-dark font-size-xxxs rounded-0 ml-2">
                    <input type="radio" name="modalSizeCharUnitTwo" /> CM
                  </label>
                </div>
              </div>
              {/* Tables */}
              <div className="row">
                <div className="col-12 col-lg-6">
                  {/* Table */}
                  <div className="table-responsive">
                    <table className="table table-bordered table-sm table-hover mb-lg-0">
                      <thead>
                        <tr>
                          <th>Size</th>
                          <th>US</th>
                          <th>Foot Length</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>36</td>
                          <td>5</td>
                          <td>22.8</td>
                        </tr>
                        <tr>
                          <td>26.5</td>
                          <td>5.5</td>
                          <td>23.1</td>
                        </tr>
                        <tr>
                          <td>37</td>
                          <td>6</td>
                          <td>23.5</td>
                        </tr>
                        <tr>
                          <td>37.5</td>
                          <td>6.</td>
                          <td>23.5</td>
                        </tr>
                        <tr>
                          <td>38</td>
                          <td>7</td>
                          <td>24.1</td>
                        </tr>
                        <tr>
                          <td>38.5</td>
                          <td>7.5</td>
                          <td>24.5</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  {/* Table */}
                  <div className="table-responsive">
                    <table className="table table-bordered table-sm table-hover mb-0">
                      <thead>
                        <tr>
                          <th>Size</th>
                          <th>US</th>
                          <th>Foot Length</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>36</td>
                          <td>5</td>
                          <td>22.8</td>
                        </tr>
                        <tr>
                          <td>39</td>
                          <td>8</td>
                          <td>24.1</td>
                        </tr>
                        <tr>
                          <td>40</td>
                          <td>9</td>
                          <td>25.4</td>
                        </tr>
                        <tr>
                          <td>40.5</td>
                          <td>9.5</td>
                          <td>25.7</td>
                        </tr>
                        <tr>
                          <td>41</td>
                          <td>10</td>
                          <td>26.0</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Wait List */}
      <div
        className="modal fade"
        id="modalWaitList"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            {/* Close */}
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <i className="fe fe-x" aria-hidden="true" />
            </button>
            {/* Header*/}
            <div className="modal-header line-height-fixed font-size-lg">
              <strong className="mx-auto">Wait List</strong>
            </div>
            {/* Body */}
            <div className="modal-body">
              <div className="row mb-6">
                <div className="col-12 col-md-3">
                  {/* Image */}
                  <a href="./product.html">
                    <img
                      className="img-fluid mb-7 mb-md-0"
                      src="/img/products/product-6.jpg"
                      alt="..."
                    />
                  </a>
                </div>
                <div className="col-12 col-md-9">
                  {/* Label */}
                  <p>
                    <a
                      className="font-weight-bold text-body"
                      href="./product.html"
                    >
                      Cotton floral print Dress
                    </a>
                  </p>
                  {/* Radio */}
                  <div className="custom-control custom-control-inline custom-control-size mb-2">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="modalWaitListSize"
                      id="modalWaitListSizeOne"
                      defaultValue={6}
                      data-toggle="form-caption"
                      data-target="#modalWaitListSizeCaption"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="modalWaitListSizeOne"
                    >
                      3XS
                    </label>
                  </div>
                  <div className="custom-control custom-control-inline custom-control-size mb-2">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="modalWaitListSize"
                      id="modalWaitListSizeTwo"
                      defaultValue="6.5"
                      data-toggle="form-caption"
                      data-target="#modalWaitListSizeCaption"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="modalWaitListSizeTwo"
                    >
                      2XS
                    </label>
                  </div>
                  <div className="custom-control custom-control-inline custom-control-size mb-2">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="modalWaitListSize"
                      id="modalWaitListSizeThree"
                      defaultValue={7}
                      data-toggle="form-caption"
                      data-target="#modalWaitListSizeCaption"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="modalWaitListSizeThree"
                    >
                      XS
                    </label>
                  </div>
                  <div className="custom-control custom-control-inline custom-control-size mb-2">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="modalWaitListSize"
                      id="modalWaitListSizeFour"
                      defaultValue="7.5"
                      data-toggle="form-caption"
                      data-target="#modalWaitListSizeCaption"
                      defaultChecked
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="modalWaitListSizeFour"
                    >
                      S
                    </label>
                  </div>
                  <div className="custom-control custom-control-inline custom-control-size mb-2">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="modalWaitListSize"
                      id="modalWaitListSizeFive"
                      defaultValue={8}
                      data-toggle="form-caption"
                      data-target="#modalWaitListSizeCaption"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="modalWaitListSizeFive"
                    >
                      M
                    </label>
                  </div>
                  <div className="custom-control custom-control-inline custom-control-size mb-2">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="modalWaitListSize"
                      id="modalWaitListSizeSix"
                      defaultValue="8.5"
                      data-toggle="form-caption"
                      data-target="#modalWaitListSizeCaption"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="modalWaitListSizeSix"
                    >
                      LG
                    </label>
                  </div>
                  <div className="custom-control custom-control-inline custom-control-size mb-2">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="modalWaitListSize"
                      id="modalWaitListSizeSeven"
                      defaultValue={9}
                      data-toggle="form-caption"
                      data-target="#modalWaitListSizeCaption"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="modalWaitListSizeSeven"
                    >
                      XL
                    </label>
                  </div>
                  <div className="custom-control custom-control-inline custom-control-size mb-2">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="modalWaitListSize"
                      id="modalWaitListSizeEight"
                      defaultValue="9.5"
                      data-toggle="form-caption"
                      data-target="#modalWaitListSizeCaption"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="modalWaitListSizeEight"
                    >
                      2XL
                    </label>
                  </div>
                  <div className="custom-control custom-control-inline custom-control-size mb-2">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="modalWaitListSize"
                      id="modalWaitListSizeNine"
                      defaultValue={10}
                      data-toggle="form-caption"
                      data-target="#modalWaitListSizeCaption"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="modalWaitListSizeNine"
                    >
                      3XL
                    </label>
                  </div>
                  <div className="custom-control custom-control-inline custom-control-size mb-2">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="modalWaitListSize"
                      id="modalWaitListSizeTen"
                      defaultValue="10.5"
                      data-toggle="form-caption"
                      data-target="#modalWaitListSizeCaption"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="modalWaitListSizeTen"
                    >
                      4XL
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  {/* Text */}
                  <p className="font-size-sm text-center text-gray-500">
                    Justo ut diam erat hendrerit morbi porttitor, per eu
                    curabitur diam sociis.
                  </p>
                </div>
              </div>
              <div className="form-row mb-2">
                <div className="col-12 col-md-6">
                  {/* Form group */}
                  <div className="form-group">
                    <label className="sr-only" htmlFor="listName">
                      Your Name
                    </label>
                    <input
                      className="form-control"
                      id="listName"
                      type="text"
                      placeholder="Your Name *"
                      required
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  {/* Form group */}
                  <div className="form-group">
                    <label className="sr-only" htmlFor="listEmail">
                      Your Name
                    </label>
                    <input
                      className="form-control"
                      id="listEmail"
                      type="email"
                      placeholder="Your Email *"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 text-center">
                  {/* Button */}
                  <button className="btn btn-dark" type="submit">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* NAVBAR */}
      <div className="navbar navbar-topbar navbar-expand-xl navbar-light bg-light">
        <div className="container">
          {/* Promo */}
          <div className="mr-xl-8">
            <i className="fe fe-truck mr-2" />{" "}
            <span className="heading-xxxs">Free shipping worldwide</span>
          </div>
          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#topbarCollapse"
            aria-controls="topbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* Collapse */}
          <div className="collapse navbar-collapse" id="topbarCollapse">
            {/* Nav */}
            <ul className="nav nav-divided navbar-nav mr-auto">
              <li className="nav-item dropdown">
                {/* Toggle */}
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                >
                  <img
                    className="mb-1 mr-1"
                    src="/img/flags/usa.svg"
                    alt="..."
                  />{" "}
                  United States
                </a>
                {/* Menu */}
                <div className="dropdown-menu minw-0">
                  <a className="dropdown-item" href="#!">
                    <img
                      className="mb-1 mr-2"
                      src="/img/flags/usa.svg"
                      alt="USA"
                    />
                    United States
                  </a>
                  <a className="dropdown-item" href="#!">
                    <img
                      className="mb-1 mr-2"
                      src="/img/flags/canada.svg"
                      alt="Canada"
                    />
                    Canada
                  </a>
                  <a className="dropdown-item" href="#!">
                    <img
                      className="mb-1 mr-2"
                      src="/img/flags/germany.svg"
                      alt="Germany"
                    />
                    Germany
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                {/* Toggle */}
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                >
                  USD
                </a>
                {/* Menu */}
                <div className="dropdown-menu minw-0">
                  <a className="dropdown-item" href="#!">
                    USD
                  </a>
                  <a className="dropdown-item" href="#!">
                    EUR
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                {/* Toggle */}
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                >
                  {lang === "en" ? "English" : "Tiếng Việt"}
                </a>
                {/* Menu */}
                <div className="dropdown-menu minw-0">
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => changeLang("en")}
                  >
                    English
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => changeLang("vi")}
                  >
                    Vietnamese
                  </a>
                </div>
              </li>
            </ul>
            {/* Nav */}
            <ul className="nav navbar-nav mr-8">
              <li className="nav-item">
                <a className="nav-link" href="./shipping-and-returns.html">
                  {t("Shipping")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./faq.html">
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  {t("Contact")}
                </Link>
              </li>
            </ul>
            {/* Nav */}
            <ul className="nav navbar-nav flex-row">
              <li className="nav-item">
                <a className="nav-link text-gray-350" href="#!">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li className="nav-item ml-xl-n4">
                <a className="nav-link text-gray-350" href="#!">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li className="nav-item ml-xl-n4">
                <a className="nav-link text-gray-350" href="#!">
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li className="nav-item ml-xl-n4">
                <a className="nav-link text-gray-350" href="#!">
                  <i className="fab fa-medium" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          {/* Brand */}
          <a className="navbar-brand" href="./overview.html">
            CFD*SHOP
          </a>
          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* Collapse */}
          <div className="collapse navbar-collapse" id="navbarCollapse">
            {/* Nav */}
            <ul className="navbar-nav mx-auto">
              <li className="nav-item dropdown">
                {/* Toggle */}
                <Link className="nav-link" data-toggle="dropdown" to="/">
                  Home
                </Link>
                {/* Menu */}
                <div className="dropdown-menu">
                  <div className="card card-lg">
                    <div className="card-body">
                      <ul className="list-styled font-size-sm">
                        <li className="list-styled-item">
                          <Link className="list-styled-link" to="/">
                            Default
                          </Link>
                        </li>
                        <li className="list-styled-item">
                          <a
                            className="list-styled-link"
                            href="./index-classic.html"
                          >
                            Classic
                          </a>
                        </li>
                        <li className="list-styled-item">
                          <a
                            className="list-styled-link"
                            href="./index-fashion.html"
                          >
                            Fashion
                          </a>
                        </li>
                        <li className="list-styled-item">
                          <a
                            className="list-styled-link"
                            href="./index-boxed.html"
                          >
                            Boxed
                          </a>
                        </li>
                        <li className="list-styled-item">
                          <a
                            className="list-styled-link"
                            href="./index-simple.html"
                          >
                            Simple
                          </a>
                        </li>
                        <li className="list-styled-item">
                          <a
                            className="list-styled-link"
                            href="./index-asymmetric.html"
                          >
                            Asymmetric
                          </a>
                        </li>
                        <li className="list-styled-item">
                          <a
                            className="list-styled-link"
                            href="./index-sidenav.html"
                          >
                            Sidenav
                          </a>
                        </li>
                        <li className="list-styled-item">
                          <a
                            className="list-styled-link"
                            href="./index-landing.html"
                          >
                            Landing
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown position-static">
                {/* Toggle */}
                <a className="nav-link" data-toggle="dropdown" href="#">
                  Catalog
                </a>
                {/* Menu */}
                <div className="dropdown-menu w-100">
                  {/* Tabs */}
                  <form className="mb-2 mb-lg-0 border-bottom-lg">
                    <div className="container">
                      <div className="row">
                        <div className="col-12">
                          {/* Nav */}
                          <nav className="nav nav-tabs nav-overflow font-size-xs border-bottom border-bottom-lg-0">
                            <a
                              className="nav-link text-uppercase active"
                              data-toggle="tab"
                              href="#navTab"
                            >
                              Women
                            </a>
                            <a
                              className="nav-link text-uppercase"
                              data-toggle="tab"
                              href="#navTab"
                            >
                              Men
                            </a>
                            <a
                              className="nav-link text-uppercase"
                              data-toggle="tab"
                              href="#navTab"
                            >
                              Kids
                            </a>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </form>
                  {/* Tab content */}
                  <div className="card card-lg">
                    <div className="card-body">
                      <div className="tab-content">
                        <div className="tab-pane fade show active" id="navTab">
                          <div className="container">
                            <div className="row">
                              <div className="col-6 col-md">
                                {/* Heading */}
                                <div className="mb-5 font-weight-bold">
                                  Clothing
                                </div>
                                {/* Links */}
                                <ul className="list-styled mb-6 mb-md-0 font-size-sm">
                                  <li className="list-styled-item">
                                    <a
                                      className="list-styled-link"
                                      href="./shop.html"
                                    >
                                      All Clothing
                                    </a>
                                  </li>
                                  <li className="list-styled-item">
                                    <a
                                      className="list-styled-link"
                                      href="./shop.html"
                                    >
                                      Blouses &amp; Shirts
                                    </a>
                                  </li>
                                  <li className="list-styled-item">
                                    <a
                                      className="list-styled-link"
                                      href="./shop.html"
                                    >
                                      Coats &amp; Jackets
                                    </a>
                                  </li>
                                  <li className="list-styled-item">
                                    <a
                                      className="list-styled-link"
                                      href="./shop.html"
                                    >
                                      Dresses
                                    </a>
                                  </li>
                                  <li className="list-styled-item">
                                    <a
                                      className="list-styled-link"
                                      href="./shop.html"
                                    >
                                      Hoodies &amp; Sweats
                                    </a>
                                  </li>
                                  <li className="list-styled-item">
                                    <a
                                      className="list-styled-link"
                                      href="./shop.html"
                                    >
                                      Denim
                                    </a>
                                  </li>
                                  <li className="list-styled-item">
                                    <a
                                      className="list-styled-link"
                                      href="./shop.html"
                                    >
                                      Jeans
                                    </a>
                                  </li>
                                  <li className="list-styled-item">
                                    <a
                                      className="list-styled-link"
                                      href="./shop.html"
                                    >
                                      Jumpers &amp; Cardigans
                                    </a>
                                  </li>
                                  <li className="list-styled-item">
                                    <a
                                      className="list-styled-link"
                                      href="./shop.html"
                                    >
                                      Leggings
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-6 col-md">
                                {/* Heading */}
                                <div className="mb-5 font-weight-bold">
                                  Shoes &amp; Boots
                                </div>
                                {/* Links */}
                                <ul className="list-styled mb-6 mb-md-0 font-size-sm">
                                  <li className="list-styled-item">
                                    <a
                                      className="list-styled-link"
                                      href="./shop.html"
                                    >
                                      All Shoes &amp; Boots
                                    </a>
                                  </li>
                                  <li className="list-styled-item">
                                    <a
                                      className="list-styled-link"
                                      href="./shop.html"
                                    >
                                      Branded Shoes
                                    </a>
                                  </li>
                                  <li className="list-styled-item">
                                    <a
                                      className="list-styled-link"
                                      href="./shop.html"
                                    >
                                      Boots
                                    </a>
                                  </li>
                                  <li className="list-styled-item">
                                    <a
                                      className="list-styled-link"
                                      href="./shop.html"
                                    >
                                      Heels
                                    </a>
                                  </li>
                                  <li className="list-styled-item">
                                    <a
                                      className="list-styled-link"
                                      href="./shop.html"
                                    >
                                      Trainers
                                    </a>
                                  </li>
                                  <li className="list-styled-item">
                                    <a
                                      className="list-styled-link"
                                      href="./shop.html"
                                    >
                                      Sandals
                                    </a>
                                  </li>
                                  <li className="list-styled-item">
                                    <a
                                      className="list-styled-link"
                                      href="./shop.html"
                                    >
                                      Shoes
                                    </a>
                                  </li>
                                  <li className="list-styled-item">
                                    <a
                                      className="list-styled-link"
                                      href="./shop.html"
                                    >
                                      Wide Fit Shoes
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-6 col-md">
                                {/* Heading */}
                                <div className="mb-5 font-weight-bold">
                                  Bags &amp; Accessories
                                </div>
                                {/* Links */}
                                <ul className="list-styled mb-0 font-size-sm">
                                  <li className="list-styled-item">
                                    <a
                                      className="list-styled-link"
                                      href="./shop.html"
                                    >
                                      All Bags &amp; Accessories
                                    </a>
                                  </li>
                                  <li className="list-styled-item">
                                    <a
                                      className="list-styled-link"
                                      href="./shop.html"
                                    >
                                      Accessories
                                    </a>
                                  </li>
                                  <li className="list-styled-item">
                                    <a
                                      className="list-styled-link"
                                      href="./shop.html"
                                    >
                                      Bags &amp; Purses
                                    </a>
                                  </li>
                                  <li className="list-styled-item">
                                    <a
                                      className="list-styled-link"
                                      href="./shop.html"
                                    >
                                      Luggage
                                    </a>
                                  </li>
                                  <li className="list-styled-item">
                                    <a
                                      className="list-styled-link"
                                      href="./shop.html"
                                    >
                                      Belts
                                    </a>
                                  </li>
                                  <li className="list-styled-item">
                                    <a
                                      className="list-styled-link"
                                      href="./shop.html"
                                    >
                                      Hats
                                    </a>
                                  </li>
                                  <li className="list-styled-item">
                                    <a
                                      className="list-styled-link"
                                      href="./shop.html"
                                    >
                                      Hair Accessories
                                    </a>
                                  </li>
                                  <li className="list-styled-item">
                                    <a
                                      className="list-styled-link"
                                      href="./shop.html"
                                    >
                                      Jewellery
                                    </a>
                                  </li>
                                  <li className="list-styled-item">
                                    <a
                                      className="list-styled-link"
                                      href="./shop.html"
                                    >
                                      Travel Accessories
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-6 col-md">
                                {/* Heading */}
                                <div className="mb-5 font-weight-bold">
                                  Collections
                                </div>
                                {/* Links */}
                                <ul className="list-styled mb-0 font-size-sm">
                                  <li className="list-styled-item">
                                    <a
                                      className="list-styled-link"
                                      href="./shop.html"
                                    >
                                      All Collections
                                    </a>
                                  </li>
                                  <li className="list-styled-item">
                                    <a
                                      className="list-styled-link"
                                      href="./shop.html"
                                    >
                                      Occasionwear
                                    </a>
                                  </li>
                                  <li className="list-styled-item">
                                    <a
                                      className="list-styled-link"
                                      href="./shop.html"
                                    >
                                      Going Out
                                    </a>
                                  </li>
                                  <li className="list-styled-item">
                                    <a
                                      className="list-styled-link"
                                      href="./shop.html"
                                    >
                                      Workwear
                                    </a>
                                  </li>
                                  <li className="list-styled-item">
                                    <a
                                      className="list-styled-link"
                                      href="./shop.html"
                                    >
                                      Holiday Shop
                                    </a>
                                  </li>
                                  <li className="list-styled-item">
                                    <a
                                      className="list-styled-link"
                                      href="./shop.html"
                                    >
                                      Jean Fit Guide
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-4 d-none d-lg-block">
                                {/* Card */}
                                <div className="card">
                                  {/* Image */}
                                  <img
                                    className="card-img"
                                    src="/img/products/product-110.jpg"
                                    alt="..."
                                  />
                                  {/* Overlay */}
                                  <div className="card-img-overlay bg-dark-0 bg-hover align-items-center">
                                    <div className="text-center">
                                      <a
                                        className="btn btn-white stretched-link"
                                        href="./shop.html"
                                      >
                                        Shop Sweaters{" "}
                                        <i className="fe fe-arrow-right ml-2" />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                {/* Toggle */}
                <NavLink className="nav-link" data-toggle="dropdown" to="/shop">
                  Shop
                </NavLink>
                {/* Menu */}
                <div className="dropdown-menu" style={{ minWidth: "650px" }}>
                  <div className="card card-lg">
                    <div className="card-body">
                      <div className="row">
                        <div className="col">
                          {/* Heading */}
                          <div className="mb-5 font-weight-bold">Shop</div>
                          {/* Links */}
                          <ul className="list-styled mb-7 font-size-sm">
                            <li className="list-styled-item">
                              <Link className="list-styled-link" to="/shop">
                                Default
                              </Link>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                href="./shop-topbar.html"
                              >
                                Topbar
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                href="./shop-collapse.html"
                              >
                                Collapse
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                href="./shop-simple.html"
                              >
                                Simple
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                href="./shop-masonry.html"
                              >
                                Masonry
                              </a>
                            </li>
                          </ul>
                          {/* Heading */}
                          <div className="mb-5 font-weight-bold">Product</div>
                          {/* Links */}
                          <ul className="list-styled font-size-sm">
                            <li className="list-styled-item">
                              <Link className="list-styled-link" to="/">
                                Default
                              </Link>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                href="./product-images-left.html"
                              >
                                Images Left
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                href="./product-image-grid.html"
                              >
                                Image Grid
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                href="./product-image-slider.html"
                              >
                                Image Slider
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                href="./product-images-stacked.html"
                              >
                                Images Stacked
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col">
                          {/* Heading */}
                          <div className="mb-5 font-weight-bold">Support</div>
                          {/* Links */}
                          <ul className="list-styled mb-7 font-size-sm">
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                href="./shopping-cart.html"
                              >
                                Shopping Cart
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                href="./checkout.html"
                              >
                                Checkout
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                href="./order-completed.html"
                              >
                                Order Completed
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                href="./shipping-and-returns.html"
                              >
                                Shipping &amp; Returns
                              </a>
                            </li>
                          </ul>
                          {/* Heading */}
                          <div className="mb-5 font-weight-bold">Account</div>
                          {/* Links */}
                          <ul className="list-styled font-size-sm">
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                href="./account-order.html"
                              >
                                Order
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                href="./account-orders.html"
                              >
                                Orders
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                href="./account-wishlist.html"
                              >
                                Wishlist
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                href="./account-personal-info.html"
                              >
                                Personal Info
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                href="./account-address.html"
                              >
                                Addresses
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                href="./account-address-edit.html"
                              >
                                Addresses: New
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col">
                          {/* Links */}
                          <ul className="list-styled mb-7 font-size-sm">
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                href="./account-payment.html"
                              >
                                Payment
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                href="./account-payment-edit.html"
                              >
                                Payment: New
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                href="./account-payment-choose.html"
                              >
                                Payment: Choose
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                href="./auth.html"
                              >
                                Auth
                              </a>
                            </li>
                          </ul>
                          {/* Heading */}
                          <div className="mb-5 font-weight-bold">Modals</div>
                          {/* Links */}
                          <ul className="list-styled font-size-sm">
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                data-toggle="modal"
                                href="#modalNewsletterHorizontal"
                              >
                                Newsletter: Horizontal
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                data-toggle="modal"
                                href="#modalNewsletterVertical"
                              >
                                Newsletter: Vertical
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                data-toggle="modal"
                                href="#modalProduct"
                              >
                                Product
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                data-toggle="modal"
                                href="#modalSearch"
                              >
                                Search
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                data-toggle="modal"
                                href="#modalShoppingCart"
                              >
                                Shopping Cart
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                data-toggle="modal"
                                href="#modalSizeChart"
                              >
                                Size Chart
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                data-toggle="modal"
                                href="#modalWaitList"
                              >
                                Wait List
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                {/* Toggle */}
                <a className="nav-link" data-toggle="dropdown" href="#">
                  Pages
                </a>
                {/* Menu */}
                <div className="dropdown-menu">
                  <div className="card card-lg">
                    <div className="card-body">
                      <ul className="list-styled font-size-sm">
                        <li className="list-styled-item">
                          <Link className="list-styled-link" to="/about">
                            About
                          </Link>
                        </li>
                        <li className="list-styled-item">
                          <Link className="list-styled-link" to="/contact">
                            Contact Us
                          </Link>
                        </li>
                        <li className="list-styled-item">
                          <Link className="list-styled-link" to="/store">
                            Store Locator
                          </Link>
                        </li>
                        <li className="list-styled-item">
                          <Link className="list-styled-link" to="/faq">
                            FAQ
                          </Link>
                        </li>
                        <li className="list-styled-item">
                          <Link className="list-styled-link" to="/coming">
                            Coming Soon
                          </Link>
                        </li>
                        <li className="list-styled-item">
                          <Link className="list-styled-link" to="/">
                            404
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                {/* Toggle */}
                <a className="nav-link" data-toggle="dropdown" href="#">
                  Blog
                </a>
                {/* Menu */}
                <div className="dropdown-menu">
                  <div className="card card-lg">
                    <div className="card-body">
                      <ul className="list-styled font-size-sm">
                        <li className="list-styled-item">
                          <Link className="list-styled-link" to="/blog-post">
                            Blog
                          </Link>
                        </li>
                        <li className="list-styled-item">
                          <Link className="list-styled-link" to="/blog-post">
                            Blog Post
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="docs/getting-started.html">
                  Docs
                </a>
              </li>
            </ul>
            {/* Nav */}
            <ul className="navbar-nav flex-row">
              <li className="nav-item">
                <a className="nav-link" data-toggle="modal" href="#modalSearch">
                  <i className="fe fe-search" />
                </a>
              </li>
              <li className="nav-item ml-lg-n4">
                {!login ? (
                  <Link className="nav-link" to="/account">
                    <i className="fe fe-user" />
                  </Link>
                ) : (
                  <Link className="nav-link" to="/account/person">
                    <i className="fas fa-user" />
                  </Link>
                )}
              </li>
              <li className="nav-item ml-lg-n4">
                <a className="nav-link" href="./account-wishlist.html">
                  <i className="fe fe-heart" />
                </a>
              </li>
              <li className="nav-item ml-lg-n4">
                <a
                  className="nav-link"
                  data-toggle="modal"
                  href="#modalShoppingCart"
                >
                  <span data-cart-items={listCart.length}>
                    <i className="fe fe-shopping-cart" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="py-3 bg-dark bg-pattern mb-4">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="text-center text-white">
                <span class="heading-xxs letter-spacing-xl">
                  ⚡️ Happy Holiday Deals on Everything ⚡️
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
