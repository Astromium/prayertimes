import React, { Component } from "react";
import Wilaya from "./Wilaya";
import "../css/buttons.css";
import GSAP from "react-gsap-enhancer";
import { TimelineMax } from "gsap";

class Wilayas extends Component {
  constructor(props) {
    super(props);
    this.myElement = null;
    this.myTween = null;
  }

  state = {
    wilayas: [
      {
        name: "أدرار",
        id: 1,
        frName: "adrar"
      },
      {
        name: "الشلف",
        id: 2,
        frName: "chlef"
      },
      {
        name: "الأغواط",
        id: 3,
        frName: "laghouat"
      },
      {
        name: "أم البواقي",
        id: 4,
        frName: "Oum El Bouaghi"
      },
      {
        name: " باتنة",
        id: 5,
        frName: "Batna"
      },
      {
        name: "بجاية",
        id: 6,
        frName: "Béjaïa"
      },
      {
        name: "بسكرة",
        id: 7,
        frName: "Biskra"
      },
      {
        name: "بشار",
        id: 8,
        frName: "Béchar"
      },
      {
        name: "البليدة",
        id: 9,
        frName: "Blida"
      },
      {
        name: "البويرة",
        id: 10,
        frName: "Bouira"
      },
      {
        name: "تمنراست",
        id: 11,
        frName: "Tamanrasset"
      },
      {
        name: "تبسة",
        id: 12,
        frName: "Tébessa"
      },
      {
        name: "تلمسان",
        id: 13,
        frName: "Tlemcen"
      },
      {
        name: "تيارت",
        id: 14,
        frName: "Tiaret"
      },
      {
        name: "تيزي وزو",
        id: 15,
        frName: "Tizi Ouzou"
      },
      {
        name: "الجزائر",
        id: 16,
        frName: "Alger"
      },
      {
        name: "الجلفة",
        id: 17,
        frName: "Djelfa"
      },
      {
        name: "جيجل",
        id: 18,
        frName: "Jijel"
      },
      {
        name: "سطيف",
        id: 19,
        frName: "Sétif"
      },
      {
        name: "سعيدة",
        id: 20,
        frName: "Saïda"
      },
      {
        name: "سكيكدة",
        id: 21,
        frName: "Skikda"
      },
      {
        name: "سيدي بلعباس",
        id: 22,
        frName: "Sidi Bel Abbès"
      },
      {
        name: "عنابة",
        id: 23,
        frName: "Annaba"
      },
      {
        name: "قالمة",
        id: 24,
        frName: "Guelma"
      },
      {
        name: "قسنطينة",
        id: 25,
        frName: "Constantine"
      },
      {
        name: "المدية",
        id: 26,
        frName: "Médéa"
      },
      {
        name: "مستغانم",
        id: 27,
        frName: "Mostaganem"
      },
      {
        name: "المسيلة",
        id: 28,
        frName: "M'Sila"
      },
      {
        name: "معسكر",
        id: 29,
        frName: "Mascara"
      },
      {
        name: "ورقلة",
        id: 30,
        frName: "Ouargla"
      },
      {
        name: "وهران",
        id: 31,
        frName: "Oran"
      },
      {
        name: "البيض",
        id: 32,
        frName: "El Bayadh"
      },
      {
        name: "اليزي",
        id: 33,
        frName: "Illizi"
      },
      {
        name: "برج بوعريريج",
        id: 34,
        frName: "Bordj Bou Arreridj"
      },
      {
        name: "بومرداس",
        id: 35,
        frName: "Boumerdès"
      },
      {
        name: "الطارف",
        id: 36,
        frName: "El Tarf"
      },
      {
        name: "تندوف",
        id: 37,
        frName: "Tindouf"
      },
      {
        name: "تسمسيلت",
        id: 38,
        frName: "Tissemsilt"
      },
      {
        name: "الوادي",
        id: 39,
        frName: "El Oued"
      },
      {
        name: "خنشلة",
        id: 40,
        frName: "Khenchela"
      },
      {
        name: "سوق أهراس",
        id: 41,
        frName: "Souk Ahras"
      },
      {
        name: "تيبازة",
        id: 42,
        frName: "Tipaza"
      },
      {
        name: "ميلة",
        id: 43,
        frName: "Mila"
      },
      {
        name: "عين الدفلى",
        id: 44,
        frName: "Aïn Defla"
      },
      {
        name: "النعامة",
        id: 45,
        frName: "Naâma"
      },
      {
        name: "عين تموشنت",
        id: 46,
        frName: "Aïn Témouchent"
      },
      {
        name: "غرداية",
        id: 47,
        frName: "Ghardaïa"
      },
      {
        name: "غليزان",
        id: 48,
        frName: "Relizane"
      }
    ],
    showWilayas: false
  };

  componentDidMount() {
    this.myTween = new TimelineMax({ paused: true, reversed: true });
  }

  handleClick = e => {
    this.setState({
      showWilayas: !this.state.showWilayas
    });
    this.myTween.to(
      this.myElement,
      0.2,

      { rotation: 90 }
    );
    this.myTween.reversed() ? this.myTween.play() : this.myTween.reverse();
  };

  render() {
    const { wilayas, showWilayas } = this.state;
    return (
      <div className="container mb-4 mt-4">
        <br />
        <h2 className="text-light" style={{ textAlign: "center" }}>
          <i
            className="fas fa-caret-down text-primary"
            style={{ cursor: "pointer" }}
            onClick={this.handleClick}
            ref={div => (this.myElement = div)}
          ></i>{" "}
          الرجاء إختيار الولاية{" "}
        </h2>
        {showWilayas ? (
          <div className="container wilayas">
            <div className="row">
              {wilayas.map(wilaya => {
                return (
                  <Wilaya
                    name={wilaya.name}
                    key={wilaya.id}
                    frName={wilaya.frName}
                    id={wilaya.id}
                  />
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Wilayas;
