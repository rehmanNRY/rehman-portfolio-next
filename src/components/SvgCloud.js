"use client"
import React from 'react'
import { TagCloud } from "@frank-mayer/react-tag-cloud";

const SvgCloud = () => {
  return (
    <TagCloud
      options={function (w) {
        return {
          radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
          maxSpeed: "fast",
          initSpeed: "fast",
        };
      }}
      onClick={function (tag, ev) {
        alert(tag);
      }}
      onClickOptions={{ passive: true }}
    >
      {[
        "VSCode",
        "TypeScript",
        "React",
        "Preact",
        "Parcel",
        "Jest",
        "Next",
        "ESLint",
        "Framer Motion",
        "Three.js",
        'HTML5',
        'CSS3',
        'MangoDb',
        'FRAMEWORKS',
        'ReactJs',
        'ANIMATIONS',
        'Bootstrap',
        'Visual Studio',
        'Mongoose',
        'JAVASCRIPT',
        'JQUERY',
        'EXPRESS',
        'XML',
        'PYTHON',
        'DJANGO',
        'MySQL',
        'RUBY',
        'Keyframes',
        'NODE JS',
        'Express',
        'BABLE',
        'C',
        'C++',
        'C#',
        'Visual Basic',
        'Pascal',
        'Cobal',
        'Programming',
        'Cuscal',
        'Cold Fusion',
        'Perl',
        'Switch Apple',
        'Algol',
        'Visual Foxpro',
        'Rehman',
        'Rebol',
        'Action Script',
        'Sheet'
      ]}
    </TagCloud>

  )
}

export default SvgCloud