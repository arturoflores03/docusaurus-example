import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Compartamos el conocimiento',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Un proyecto bien documentado le hace la vida mas facil a toodos.
        Nuestro equipo de desarrollo se vuelve cada vez mas solido y fuerte mientras
        mas conozca del proyecto. Esta es una excelente forma de lograrlo,
      </>
    ),
  },
  {
    title: 'Legacy is not allowed!',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Recordemos actualizar de forma periodica las informaciones aqui compartidas y de esa forma estaremos siempre a la vanguardia.
      </>
    ),
  },
  {
    title: 'Gracias Docusaurus',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Pueden revisar toda la documentacion de Dcusaurus en https://docusaurus.io/docs
        Es facilito y no te tomara ni 5 min
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
