const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '1rem !important',
    },
    fontFamily:{
      'Inter': ['Inter'],
      'Georgian': ['Noto Sans Georgian']
    },
    opacity: {
      "0-pct": "0%",
      "5-pct": "5%",
      "6-pct": "6%",
      "10-pct": "10%",
      "15-pct": "15%",
      "16-pct": "16%",
      "20-pct": "20%",
      "25-pct": "25%",
      "30-pct": "30%",
      "35-pct": "35%",
      "40-pct": "40%",
      "45-pct": "45%",
      "50-pct": "50%",
      "55-pct": "55%",
      "60-pct": "60%",
      "65-pct": "65%",
      "70-pct": "70%",
      "75-pct": "75%",
      "80-pct": "80%",
      "85-pct": "85%",
      "90-pct": "90%",
      "95-pct": "95%",
      "100-pct": "100%"
    },
    boxShadow: {
      'tabs': '-4px -11px 24px rgb(109 164 227 / 8%)',
      'header': '-4px -11px 24px rgb(109 164 227 / 8%)'
    },
    colors: {
      ...colors,
    },
    extend: {
      backgroundImage: {
        'course-img1': 'url("/assets/images/courser-img1.svg")',
        'course-img2': 'url("/assets/images/courser-img2.svg")',
        'course-img3': 'url("/assets/images/courser-img3.svg")',
        'course-img4': 'url("/assets/images/courser-img4.svg")',
        'course-img5': 'url("/assets/images/courser-img5.svg")',
        'course-img6': 'url("/assets/images/courser-img6.svg")',
        'course-img7': 'url("/assets/images/courser-img7.svg")',
        'course-img8': 'url("/assets/images/courser-img8.svg")',
        'course-img9': 'url("/assets/images/courser-img9.svg")',
        'map': 'url("/assets/images/map.svg")'
      },
      backgroundSize: {
        '60%': '60%',
      },
      colors: {
        'transparent': 'transparent',
        'primary1': '#002147',
        'primary2': '#FDC800',
        'secondary1': '#F0F4F9',
        'secondary2': '#00B2B2',
        'red-0':'#E82D2D',
        'red-357': "#FF2F3A",
        'red-910': '#EA302F',
        'blue-222': '#F5F8FF',
        'blue-224': '#4E7EFF',
        'blue-227': '#C6D2FC',
        'blue-910': '#5C7EF7',
        'purple-290':'#9C18B6',
        'purple-95': '#BF2472',
        'purple-910': '#851486',
        'purple-1000': '#8818E2',
        'gray-0': '#BDBDBD',
        'black-500': '#1F1F1F',
        'light-gray': '#F2F4F6',
        'orange': '#DD6E5B',
        'pink-1000': '#CE5B79',
        'yellow-48': '#FFCE00',
      },
      width: {
        "1-px": "1px",
        "2-px": "2px",
        "54-px": "54px",
        "70-px": "70px",
        "95-px": "95px",
        "120-px": "120px",
        "160-px": "160px",
        "200-px": "200px",
        "300-px": "300px",
        "320-px": "320px",
        "350-px": "350px",
        "420-px": "420px",
        "430-px": "430px",
        "450-px": "450px",
        "480-px": "480px",
        "500-px": "500px",
        "540-px": "540px",
        "550-px": "550px",
        "600-px": "600px",
        "618-px": "618px",
        "633-px": "633px",
        "700-px": "700px",
        "766-px": "766px",
        "800-px": "800px",
        "872-px": "872px",
        "900-px": "900px",
        "1096-px": "1096px",
        "64-pres": "64%",
      },
      maxWidth: {
        "95-px": "95px",
        "70-px": "70px",
        "217-px": "217px",
        "350-px": "350px",
        "375-px": "375px",
        "500-px": "500px",
        "600-px": "600px",
        "630-px": "630px",
        "800-px": "800px",
      },
      height: {
        "1-px": "1px",
        "2-px": "2px",
        "54-px": "54px",
        "60-px": "60px",
        "77-px": "77px",
        "120-px": "120px",
        "131-px": "131px",
        "140-px": "140px",
        "150-px": "150px",
        "180-px": "180px",
        "200-px": "200px",
        "300-px": "300px",
        "331-px": "331px",
        "372-px": "372px",
        "390-px": "390px",
        "400-px": "400px",
        "430-px": "430px",
        "450-px": "450px",
        "470-px": "470px",
        "530-px": "530px",
        "600-px": "600px",
        "750-px": "750px",
        "823-px": "823px",
      },
      inset: {
        "10-px": "10px",
        "30-px": "30px",
        "50-px": "50px",
        "30-m-px": "-30px",
        "35-m-px": "-35px",
      },
      borderRadius: {
        '4xl': '32px',
        '5xl': '48px',
        '20': '20px'
      },
      maxHeight: {
        "95-px": "95px",
        "70-px": "70px",
        "350-px": "350px",
        "450-px": "450px",
        "500-px": "500px",
        "600-px": "600px",
      },
      fontSize: {
        "8-px": "8px",
        "10-px": "10px",
        "40-px": "40px",
        "50-px": "50px",
        "22-px": "22px",
        "32-px": "32px",
      },
      padding: {
        "6-px": "6px",
        "10-px": "10px",
        "14-px": "14px",
        "15-px": "15px",
        "16-px": "16px",
        "18-px": "18px",
        "22-px": "22px",
        "50-px": "50px",
        "53-px": "53px",
        "54-px": "54px",
        "60-px": "60px",
        "78-px": "78px",
        "90-px": "90px",
        "100-px": "100px",
        "122-px": "122px",
        "150-px": "150px",
        sm: "14px",
      },
      margin: {
        "6-px": "6px",
        "10-px": "10px",
        "15-px": "15px",
        "16-px": "16px",
        "18-px": "18px",
        "50-px": "50px",
        "54-px": "54px",
        "60-px": "60px",
        "70-px": "70px",
        "122-px": "122px",
        sm: "14px",
      },
      lineHeight: {
        '12': '50px',
        '13': '55px',
        '14': '60px',
        '15': '65px',
        '16': '70px',
        '17': '78px',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        none: 'none',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
