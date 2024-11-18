import { NavLink } from "react-router-dom";

const Campaign = ({ campaign }) => {

    const { id, title, image, status, division } = campaign

    return (
        <div>
            <div className=" bg-base-100 shadow-xl border border-gray-300 flex items-center md:flex-col md:h-[450px]">
                <div className="h-[50%] w-[40%] md:w-auto">
                    <figure>
                        <img className="p-3"
                            src={image}
                            alt="image" />
                    </figure>
                </div>
                <div className="md:card-body h-[50%]  w-[60%] md:w-auto my-3">
                    <div className="flex justify-between">
                        <div className="badge badge-outline p-3">{division}</div>
                        <div className="badge badge-outline p-3">{status}</div>
                    </div>
                    <h2 className="card-title my-3">{title}</h2>
                    <div className="text-right mr-2 md:mr-0 md:text-center ">
                        <NavLink to={`/details/${id}`} className="btn btn-primary">Donate Now</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Campaign;