export default {
  logo: <img width="100px" src="/koibanx.png" />,
  project: {
    link: "https://github.com/shuding/nextra",
  },
  primaryHue: 40,
  primarySaturation: 100,
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Koilerplate",
    };
  },
};
