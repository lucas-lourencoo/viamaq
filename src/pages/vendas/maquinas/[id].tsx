// import { GetStaticPaths, GetStaticProps } from 'next';
// import { FaCalendar, FaTachometerAlt, FaTag, FaTractor } from 'react-icons/fa';
// import Slider from 'react-slick';
// import { Footer } from '../../../components/Footer';
// import { Header } from '../../../components/Header';
// import { Paginator } from '../../../components/Paginator';
// import { Container } from '../../../styles/pages/single';
// import { Title } from '../../../styles/Title';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Head from 'next/head';

// interface MachineProps {
//   machine: {
//     model: string;
//     year: number;
//     hourmeter: string;
//     image: string;
//     value: string;
//     brand: string;
//     category_id: string;
//   };
// }

// const Machine = ({ machine }: MachineProps) => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     pauseOnHover: false,
//   };

//   return (
//     <Container image={machine.image}>
//       <Head>
//         <title>Viamaq - Tratores e Peças | ${machine.model}</title>
//       </Head>
//       <Header />
//       <Paginator text={`Venda | Máquinas | ${machine.model}`} />

//       <main>
//         <section className='machineGrid'>
//           <figure className='image'></figure>

//           <section className='info'>
//             <h1>
//               <FaTractor /> CDM 512D
//             </h1>
//             <span>Categoria: Compactadores combinados</span>
//             <hr />
//             <div className='fewInfos'>
//               <span>
//                 <FaCalendar /> Ano de Fabricação: 2012
//               </span>
//               <span>
//                 <FaTachometerAlt /> Horímetro: 0
//               </span>
//             </div>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
//               aliquam pellentesque integer sed lobortis et. Eu risus mattis
//               scelerisque pulvinar. A, mattis imperdiet sagittis, nunc mollis
//               luctus fusce ultricies viverra.
//             </p>
//           </section>
//         </section>

//         <section className='destaques'>
//           <Title>MÁQUINAS EM DESTAQUE</Title>
//           <Slider {...settings}>
//             <div className='card'>
//               <img src='/maq1.png' alt='' />
//               <div className='infos'>
//                 <h3>CDM 512D</h3>
//                 <p>
//                   <FaTag color='var(--principal-darkness-2)' /> Compactadores
//                   Combinados (CIL / PNEUS)
//                 </p>
//                 <p>
//                   <FaTractor color='var(--principal-darkness-2)' /> LONKING
//                   CDM512D
//                 </p>
//                 <p>
//                   <FaCalendar color='var(--principal-darkness-2)' /> Ano de
//                   Fabricação: 2012
//                 </p>
//                 <p>
//                   <FaTachometerAlt color='var(--principal-darkness-2)' />
//                   Horimetro: 0
//                 </p>
//                 <a href='#'>Ver Mais</a>
//               </div>
//             </div>
//             <div className='card'>
//               <img src='/maq2.png' alt='' />
//               <div className='infos'>
//                 <h3>CDM 512D</h3>
//                 <p>
//                   <FaTag color='var(--principal-darkness-2)' /> Compactadores
//                   Combinados (CIL / PNEUS)
//                 </p>
//                 <p>
//                   <FaTractor color='var(--principal-darkness-2)' /> LONKING
//                   CDM512D
//                 </p>
//                 <p>
//                   <FaCalendar color='var(--principal-darkness-2)' /> Ano de
//                   Fabricação: 2012
//                 </p>
//                 <p>
//                   <FaTachometerAlt color='var(--principal-darkness-2)' />
//                   Horimetro: 0
//                 </p>
//                 <a href='#'>Ver Mais</a>
//               </div>
//             </div>
//             <div className='card'>
//               <img src='/maq3.png' alt='' />
//               <div className='infos'>
//                 <h3>CDM 512D</h3>
//                 <p>
//                   <FaTag color='var(--principal-darkness-2)' /> Compactadores
//                   Combinados (CIL / PNEUS)
//                 </p>
//                 <p>
//                   <FaTractor color='var(--principal-darkness-2)' /> LONKING
//                   CDM512D
//                 </p>
//                 <p>
//                   <FaCalendar color='var(--principal-darkness-2)' /> Ano de
//                   Fabricação: 2012
//                 </p>
//                 <p>
//                   <FaTachometerAlt color='var(--principal-darkness-2)' />
//                   Horimetro: 0
//                 </p>
//                 <a href='#'>Ver Mais</a>
//               </div>
//             </div>
//             <div className='card'>
//               <img src='/maq1.png' alt='' />
//               <div className='infos'>
//                 <h3>CDM 512D</h3>
//                 <p>
//                   <FaTag color='var(--principal-darkness-2)' /> Compactadores
//                   Combinados (CIL / PNEUS)
//                 </p>
//                 <p>
//                   <FaTractor color='var(--principal-darkness-2)' /> LONKING
//                   CDM512D
//                 </p>
//                 <p>
//                   <FaCalendar color='var(--principal-darkness-2)' /> Ano de
//                   Fabricação: 2012
//                 </p>
//                 <p>
//                   <FaTachometerAlt color='var(--principal-darkness-2)' />
//                   Horimetro: 0
//                 </p>
//                 <a href='#'>Ver Mais</a>
//               </div>
//             </div>
//           </Slider>
//         </section>
//       </main>

//       <Footer />
//     </Container>
//   );
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   const res = await fetch('https://viamaq.vercel.app/api/machines');
//   const machine = await res.json();

//   const paths = machine.map((machine: any) => ({
//     params: {
//       id: machine.id,
//     },
//   }));

//   return { paths, fallback: true };
// };

// export const getStaticProps: GetStaticProps = async (paths) => {
//   const res = await fetch(
//     `https://viamaq.vercel.app/api/machines/${paths?.params?.id}`
//   );
//   const machine = (await res.json()) ?? null;

//   return { props: { machine } };
// };

// export default Machine;

export default function Piece() {
  return <h1>Hi!</h1>;
}
