import { useContext } from "react"
import { ThemeContext } from "../component/contexts/ThemeContext"

export default function AccueilSVG({whoActive}){

    const {theme} = useContext(ThemeContext)


    const bgActive = theme === "light" ? (whoActive === "/albinpoutrain/" ? "#00BD0B" : "none") : (whoActive === "/albinpoutrain/" ? "rgb(0, 43, 117)" : "none")
    const drawActive = theme === "light" ? (whoActive === "/albinpoutrain/" ? "#FFF" : "#000000") : (whoActive === "/albinpoutrain/" ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.4)")
    const stroke = whoActive === "/albinpoutrain/" ? "white" : "black"
    const strokeWidth = whoActive === "/albinpoutrain/" ? 4 : 0

    return <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
    width="64.000000pt" height="64.000000pt" viewBox="0 0 64.000000 64.000000"
    preserveAspectRatio="xMidYMid meet">
    <g  transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
    fill="#000000" stroke="none" >
        <path fill={bgActive} d="M270 630 c-67 -11 -114 -34 -164 -80 -164 -151 -119 -423 85 -515 55
        -24 70 -27 143 -23 66 3 91 10 135 33 159 87 212 304 109 453 -68 98 -190 151
        -308 132z"/>
        <path fill={drawActive} stroke={stroke} strokeWidth={strokeWidth} d="M241 630 c-110 -23 -212 -132 -232 -248 -28 -159 51 -302 201 -363
        57 -23 185 -17 245 12 64 30 124 90 154 154 35 72 35 198 0 270 -30 63 -90
        124 -151 152 -54 26 -154 36 -217 23z m213 -44 c105 -51 161 -144 161 -266 0
        -85 -21 -142 -74 -203 -82 -92 -237 -121 -353 -64 -160 79 -215 278 -118 430
        80 126 246 170 384 103z"/>
        <path fill={drawActive} stroke={stroke} strokeWidth={strokeWidth} d="M198 445 c-62 -53 -114 -100 -116 -105 -6 -18 13 -10 41 15 l27 26 0
        -121 0 -120 170 0 170 0 0 122 0 122 28 -27 c29 -28 42 -33 42 -18 0 11 -228
        201 -240 201 -5 0 -59 -43 -122 -95z m197 14 l75 -62 0 -118 0 -119 -150 0
        -150 0 0 118 1 117 72 62 c40 34 73 62 75 62 1 1 36 -27 77 -60z"/>
    </g>
   </svg> 

   /*return <svg
      version="1.0"
      width="64.000000pt"
      height="64.000000pt"
      viewBox="0 0 64.000000 64.000000"
      preserveAspectRatio="xMidYMid meet"
      id="svg3"
      xmlns="http://www.w3.org/2000/svg">
     <defs
        id="defs3" />

     <g
        transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
        id="g3">
       <path
          d="M270 630 c-67 -11 -114 -34 -164 -80 -164 -151 -119 -423 85 -515 55         -24 70 -27 143 -23 66 3 91 10 135 33 159 87 212 304 109 453 -68 98 -190 151         -308 132z"
          id="path1"
          fill={bgActive} />
       <path
          d="M241 630 c-110 -23 -212 -132 -232 -248 -28 -159 51 -302 201 -363         57 -23 185 -17 245 12 64 30 124 90 154 154 35 72 35 198 0 270 -30 63 -90         124 -151 152 -54 26 -154 36 -217 23z m213 -44 c105 -51 161 -144 161 -266 0         -85 -21 -142 -74 -203 -82 -92 -237 -121 -353 -64 -160 79 -215 278 -118 430         80 126 246 170 384 103z"
          id="path2"
          fill={drawActive} />
       <path
          d="M198 445 c-62 -53 -114 -100 -116 -105 -6 -18 13 -10 41 15 l27 26 0         -121 0 -120 170 0 170 0 0 122 0 122 28 -27 c29 -28 42 -33 42 -18 0 11 -228         201 -240 201 -5 0 -59 -43 -122 -95z m197 14 l75 -62 0 -118 0 -119 -150 0         -150 0 0 118 1 117 72 62 c40 34 73 62 75 62 1 1 36 -27 77 -60z"
          id="path3"
          fill={drawActive} />
     </g>
   </svg>*/
}

/*

<path fill="#0000FF" d="M204 596 c-73 -34 -123 -83 -156 -151 -93 -197 53 -425 272 -425 119
0 218 64 271 175 94 196 -52 425 -271 425 -47 0 -79 -7 -116 -24z m239 -152
c65 -53 115 -99 112 -102 -3 -3 -19 4 -35 17 l-30 22 0 -121 0 -120 -170 0
-170 0 0 122 0 122 -28 -27 c-28 -27 -47 -35 -40 -18 3 10 230 201 238 201 3
0 58 -43 123 -96z"/>
<path fill="#0000FF" d="M243 458 l-73 -61 0 -118 0 -119 150 0 150 0 0 119 0 120 -70 58
c-39 32 -74 59 -78 60 -4 1 -40 -25 -79 -59z"/>

*/