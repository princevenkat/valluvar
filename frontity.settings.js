const settings = {
  "name": "valluvar",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "valluvar-react",
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://jsnation2020.frontity.org/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
