import Container from "../Container";
import Search from "./Search";



const Navber = () => {
    return (
        <div className="fixed w-full bg-white z-10 shadow-sm">
            <div className="py-4 border-b-[1px]">
                <Container>
                     <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                       <img className="hidden md:block" src="https://i.ibb.co/RzcPrT9/logo.png" alt="" width={100} height={100} />
                         
                         <Search></Search>
                          <div>menu</div>
                     </div>
                </Container>

            </div>
             
        </div>
    );
};

export default Navber;