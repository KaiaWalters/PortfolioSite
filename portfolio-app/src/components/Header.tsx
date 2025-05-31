const Header = () => {
    return (
        <header className="masthead">
        <div className="container d-flex h-100 align-items-center">
            <div className="mx-auto text-center">
                <div className="text-container position-relative">
                    <div className="text-content p-3">
                        {/* <div className="halo">
                            <HeaderHalo/>
                        </div> */}
                        <h1 className="mx-auto my-0 text-uppercase text-white animate__animated animate__heartBeat animate__delay-2s">Let's Build Something Spectacular!</h1>
                        <h2 className="text-ruck mx-auto mt-2 mb-5 text-white-50">Thrivn Tech LLC</h2>
                    </div>
                </div>
            </div>
        </div>
        </header>
    )
}


// const HeaderHalo = () => {
//   const dots = 8;

//   return (
//     <>
//       {Array.from({ length: dots }).map((_, i) => {
//         const angle = (360 / dots) * i;

//         return (
//           <div
//             key={i}
//             className="dot"
//             style={{
//               transform: `rotate(${angle}deg) translate(-50%, -50%)`,
//             }}
//           />
//         );
//       })}
//     </>
//   );
// };

export default Header