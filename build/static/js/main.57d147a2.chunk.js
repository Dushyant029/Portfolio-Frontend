(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    18: function (e, a, t) {
      e.exports = t(28);
    },
    28: function (e, a, t) {
      "use strict";
      t.r(a);
      var l = t(0),
        n = t.n(l),
        r = t(13),
        m = t.n(r),
        o = function () {
          return n.a.createElement(
            "div",
            { className: "container" },
            n.a.createElement(
              "div",
              { className: "row" },
              n.a.createElement(
                "div",
                { className: "col-md" },
                n.a.createElement("h2", null, "About Me")
              )
            ),
            n.a.createElement(
              "div",
              { className: "row" },
              n.a.createElement(
                "div",
                { className: "col-md" },
                n.a.createElement("img", {
                  src: "assets/images/index.png",
                  id: "mainpic",
                  className: "img-thumbnail p-3 m-3 mh-50 h-33 img-fluid mt-0",
                }),
                n.a.createElement(
                  "p",
                  null,
                  "As somebody that moved in from down south, becoming part of a new society is always a challenge. Hello, My name is Juan Castellanos and this is the way I want to introduce myself to you, the reader. I was born in Mexico in 1990, Graduated as a Computer Engineer from the University of Guadalajara in 2015, I moved to USA the same year. Before I moved, I used to own a cyber cafe where I developed some basic IT knowledge and love for computer science. My goal was always thrive as a developer in a new country, and now I'm closer than ever. This story will be updated every now and then, please stay in touch."
                )
              )
            ),
            n.a.createElement(
              "div",
              { className: "row " },
              n.a.createElement(
                "div",
                { className: "col-md bg-dark" },
                n.a.createElement(
                  "div",
                  { className: "list-group pt-3" },
                  n.a.createElement(
                    "a",
                    {
                      href: "https://www.linkedin.com/in/juan-carlos-castellanos-navarro-568433116/",
                      className: "list-group-item list-group-item-action",
                    },
                    "LinkedIn Profile"
                  ),
                  n.a.createElement(
                    "a",
                    {
                      href: "https://monguis.github.io/monguis.bootstrap.portfolio.github.com/assets/Juan%20Carlos%20Castellanos%20Navarro%20resume.docx",
                      className: "list-group-item list-group-item-action",
                    },
                    "Resume"
                  ),
                  n.a.createElement(
                    "a",
                    {
                      href: "https://github.com/monguis",
                      className: "list-group-item list-group-item-action",
                    },
                    "GitHub Profile"
                  ),
                  n.a.createElement(
                    "a",
                    {
                      href: "mailto:jccnnetwork@gmail.com",
                      className: "list-group-item list-group-item-action",
                    },
                    "email me: jccnnetwork@gmail.com"
                  ),
                  n.a.createElement(
                    "p",
                    { className: "list-group-item" },
                    "mobile: 720-971-0087"
                  )
                )
              )
            ),
            n.a.createElement("br", null),
            n.a.createElement("br", null)
          );
        },
        i = t(17),
        s = function (e) {
          var a = e.index,
            t = e.project,
            l = e.handleImageClick;
          return n.a.createElement(
            "div",
            { className: "col-sm-6 w-100 p-3 justify-content-sm-center" },
            n.a.createElement(
              "div",
              {
                index: a,
                onClick: function (e) {
                  l(e);
                },
                className: "innerlabelpicture",
                "data-toggle": "modal",
                "data-target": "#exampleModalCenter",
                "data-link": t.deployedLink,
              },
              n.a.createElement("img", {
                src: t.image,
                className: "img-fluid",
                alt: "...",
              }),
              n.a.createElement("div", { className: "innerlabel" }, t.name)
            )
          );
        },
        c = function () {
          var e = Object(l.useState)([
              {
                name: "Weather Dashboard",
                deployedLink: "https://monguis.github.io/weather-checker/",
                image: "assets/images/weather.png",
                gitHubLink: "https://github.com/monguis/weather-checker",
              },
              {
                name: "Password Generator",
                image: "assets/images/passwordgen.png",
                deployedLink:
                  "https://monguis.github.io/monguis.passwordgenerator.io/",
                gitHubLink:
                  "https://github.com/monguis/monguis.passwordgenerator.io",
              },
              {
                name: "My First Project",
                image: "assets/images/project1.png",
                deployedLink: "https://jeffordsm.github.io/Project1/",
                gitHubLink: "https://github.com/JeffordsM/Project1",
              },
              {
                name: "My Second Project",
                image: "assets/images//project2.png",
                deployedLink: "https://sheltered-falls-54052.herokuapp.com/",
                gitHubLink: "https://github.com/BestBroBradley/project-two",
              },
              {
                name: "Burger",
                image: "assets/images/burger.png",
                deployedLink: "https://powerful-badlands-43542.herokuapp.com/",
                gitHubLink: "https://github.com/monguis/burger",
              },
              {
                name: "Note Taker (express.js)",
                image: "assets/images/notetaker.png",
                deployedLink: "https://vast-sands-96309.herokuapp.com/",
                gitHubLink: "https://github.com/monguis/express",
              },
            ]),
            a = Object(i.a)(e, 2),
            t = a[0];
          a[1];
          return n.a.createElement(
            "div",
            { className: "container" },
            n.a.createElement(
              "div",
              { className: "col-md-12 col-lg-8 col-sm-12" },
              n.a.createElement(
                "div",
                { className: "row" },
                n.a.createElement("h2", null, "Portfolio")
              ),
              n.a.createElement(
                "div",
                { className: "row" },
                t.map(function (e, l) {
                  return n.a.createElement(
                    n.a.Fragment,
                    null,
                    n.a.createElement(s, {
                      project: e,
                      key: e.name,
                      index: l,
                      handleImageClick:
                        (a[1],
                        function (e) {
                          var a = e.target.parentElement.getAttribute("index"),
                            l = (e.target.parentElement, t[a]);
                          document
                            .getElementById("modalLink1")
                            .setAttribute("href", l.deployedLink),
                            document
                              .getElementById("modalLink2")
                              .setAttribute("href", l.gitHubLink),
                            (document.getElementById(
                              "exampleModalCenterTitle"
                            ).textContent = l.name);
                        }),
                    })
                  );
                })
              )
            ),
            n.a.createElement(
              "div",
              {
                className: "modal fade",
                id: "exampleModalCenter",
                tabIndex: -1,
                role: "dialog",
                "aria-labelledby": "exampleModalCenterTitle",
                "aria-hidden": "true",
              },
              n.a.createElement(
                "div",
                {
                  className: "modal-dialog modal-dialog-centered",
                  role: "document",
                },
                n.a.createElement(
                  "div",
                  { className: "modal-content" },
                  n.a.createElement(
                    "div",
                    { className: "modal-header" },
                    n.a.createElement(
                      "h5",
                      {
                        className: "modal-title",
                        id: "exampleModalCenterTitle",
                      },
                      "My first Project"
                    ),
                    n.a.createElement(
                      "button",
                      {
                        type: "button",
                        className: "close",
                        "data-dismiss": "modal",
                        "aria-label": "Close",
                      },
                      n.a.createElement(
                        "span",
                        { "aria-hidden": "true" },
                        "\xd7"
                      )
                    )
                  ),
                  n.a.createElement(
                    "div",
                    { className: "modal-body" },
                    n.a.createElement(
                      "a",
                      {
                        id: "modalLink1",
                        href: "",
                        className: "list-group-item list-group-item-action",
                      },
                      "Link to Website"
                    ),
                    n.a.createElement(
                      "a",
                      {
                        id: "modalLink2",
                        href: "",
                        className: "list-group-item list-group-item-action",
                      },
                      "GitHub repository"
                    )
                  ),
                  n.a.createElement(
                    "div",
                    { className: "modal-footer" },
                    n.a.createElement(
                      "button",
                      {
                        type: "button",
                        className: "btn btn-secondary",
                        "data-dismiss": "modal",
                      },
                      "Close"
                    )
                  )
                )
              )
            )
          );
        },
        d = function () {
          return n.a.createElement(
            "div",
            { className: "container" },
            n.a.createElement(
              "div",
              { className: "row" },
              n.a.createElement(
                "div",
                { className: "col-md col-lg-8 col-sm" },
                n.a.createElement("h2", null, "Contact"),
                n.a.createElement(
                  "form",
                  null,
                  n.a.createElement(
                    "div",
                    { className: "form-group" },
                    n.a.createElement(
                      "label",
                      { htmlFor: "formGroupExampleInput" },
                      "Name"
                    ),
                    n.a.createElement("input", {
                      type: "text",
                      className: "form-control",
                      id: "formGroupExampleInput",
                      placeholder: "John Smith",
                    })
                  ),
                  n.a.createElement(
                    "div",
                    { className: "form-group" },
                    n.a.createElement(
                      "label",
                      { htmlFor: "exampleInputEmail1" },
                      "Email address"
                    ),
                    n.a.createElement("input", {
                      type: "email",
                      className: "form-control",
                      id: "exampleInputEmail1",
                      placeholder: "example@gmail.com",
                    })
                  ),
                  n.a.createElement(
                    "div",
                    { className: "form-group" },
                    n.a.createElement(
                      "label",
                      { htmlFor: "Message" },
                      "Message"
                    ),
                    n.a.createElement("textarea", {
                      className: "form-control",
                      id: "Message",
                      rows: 6,
                      defaultValue: " ",
                    })
                  ),
                  n.a.createElement(
                    "button",
                    { type: "submit", className: "btn btn-primary" },
                    "Submit"
                  )
                )
              )
            )
          );
        };
      function u(e) {
        var a = e.fluid,
          t = e.children;
        return n.a.createElement(
          "div",
          { className: "container".concat(a ? "-fluid" : "") },
          t
        );
      }
      function p(e) {
        var a = e.fluid,
          t = e.children;
        return n.a.createElement(
          "div",
          { className: "row".concat(a ? "-fluid" : "") },
          t
        );
      }
      function g(e) {
        var a = e.size,
          t = e.children;
        return n.a.createElement(
          "div",
          {
            className: a
              .split(" ")
              .map(function (e) {
                return "col-" + e;
              })
              .join(" "),
          },
          t
        );
      }
      var h = function (e) {
        var a = e.children;
        return n.a.createElement(
          "div",
          {
            style: {
              height: 300,
              clear: "both",
              paddingTop: 120,
              textAlign: "center",
            },
            className: "jumbotron",
          },
          a
        );
      };
      var E = function () {
        return n.a.createElement(
          u,
          { fluid: !0 },
          n.a.createElement(
            p,
            null,
            n.a.createElement(
              g,
              { size: "md-12" },
              n.a.createElement(
                h,
                null,
                n.a.createElement("h1", null, "404 Page Not Found"),
                n.a.createElement(
                  "h1",
                  null,
                  n.a.createElement(
                    "span",
                    {
                      role: "img",
                      "aria-label": "Face With Rolling Eyes Emoji",
                    },
                    "\ud83d\ude44"
                  )
                )
              )
            )
          )
        );
      };
      var b = function () {
          return n.a.createElement(
            "nav",
            { className: "navbar navbar-expand-lg navbar-light bg-light" },
            n.a.createElement(
              "div",
              { className: "container" },
              n.a.createElement(
                "div",
                { className: "col-lg-3 col-md-6 h1div" },
                n.a.createElement(
                  "h1",
                  { className: "text-light" },
                  "Juan Carlos"
                )
              ),
              n.a.createElement(
                "div",
                { className: "col-lg-4 offset-lg-5 col-md-6" },
                n.a.createElement(
                  "div",
                  { className: "row d-flex justify-content-center" },
                  n.a.createElement(
                    "a",
                    { className: "nav-link", href: "/contact/" },
                    "Contact"
                  ),
                  n.a.createElement(
                    "a",
                    { className: "nav-link", href: "/portfolio/" },
                    "Portfolio"
                  ),
                  n.a.createElement(
                    "a",
                    { className: "nav-link", href: "/home/" },
                    "About"
                  )
                )
              )
            )
          );
        },
        f = t(14),
        v = t(5);
      var N = function () {
        return n.a.createElement(
          f.a,
          null,
          n.a.createElement(b, null),
          n.a.createElement(
            v.c,
            null,
            n.a.createElement(
              v.a,
              { exact: !0, path: ["/", "/home"] },
              n.a.createElement(o, null)
            ),
            n.a.createElement(
              v.a,
              { exact: !0, path: "/portfolio" },
              n.a.createElement(c, null)
            ),
            n.a.createElement(
              v.a,
              { exact: !0, path: "/contact" },
              n.a.createElement(d, null)
            ),
            n.a.createElement(v.a, { path: "*" }, n.a.createElement(E, null))
          )
        );
      };
      m.a.render(n.a.createElement(N, null), document.getElementById("root"));
    },
  },
  [[18, 1, 2]],
]);
//# sourceMappingURL=main.57d147a2.chunk.js.map
