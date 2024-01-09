import React, {useCallback, useEffect} from "react";
import ImageItem from "../../molecules/ImageItem";
import {imagePortoList} from "../../../services/Image";
import {imageDuplicate} from "../../../services/data-types";

interface ImagePortoProps {
    id: number;
}

export default function ImagePorto(props: ImagePortoProps) {
    const [imageList, setImageData] = React.useState([]);
    const {id} = props;
    const getImageList = useCallback(async () => {
        const response = await imagePortoList();

        // Filter out duplicates based on category_id
        const uniqueImageList = Array.from(
            new Set(response.data.map((item: imageDuplicate) => item.category_id))
        ).map((categoryId) => {
            // Find the first item with the given category_id
            return response.data.find(
                (item: imageDuplicate) => item.category_id === categoryId
            );
        });
        // Do something with uniqueImageList, e.g., set it to state or process it further
        setImageData(uniqueImageList as never[]);
    }, [imagePortoList]);

    useEffect(() => {
        getImageList();
    }, []);
    return (
        <section className="project__page p_relative see__pad">
            <div className="row">
                {id === 0 ? (
                    <>
                        {/* Render your components for id === 0 */}
                        <ImageItem
                            // key={item.id}
                            title="Teknologi"
                            category="Social Media Design"
                            thumbnail="/assets/images/porto/tech.png"
                            portoId={1}
                            categoryId={1}/>
                        <ImageItem
                            // key={item.id}
                            title="Fashion"
                            category="Social Media Design"
                            thumbnail="/assets/images/porto/fashion.png"
                            portoId={1}
                            categoryId={2}/>
                        <ImageItem
                            // key={item.id}
                            title="F&B"
                            category="Social Media Design"
                            thumbnail="/assets/images/porto/food.png"
                            portoId={1}
                            categoryId={3}/>
                        <ImageItem
                            // key={item.id}
                            title="Furniture"
                            category="Social Media Design"
                            thumbnail="/assets/images/porto/furniture.png"
                            portoId={1}
                            categoryId={4}/>
                        <ImageItem
                            // key={item.id}
                            title="Otomotif"
                            category="Social Media Design"
                            thumbnail="/assets/images/porto/otomotif.png"
                            portoId={1}
                            categoryId={5}/>
                        <ImageItem
                            // key={item.id}
                            title="Sport"
                            category="Social Media Design"
                            thumbnail="/assets/images/porto/sport.png"
                            portoId={1}
                            categoryId={6}/>
                        <ImageItem
                            // key={item.id}
                            title="Logo"
                            category="Logo"
                            thumbnail="/assets/images/porto/logo.png"
                            portoId={3}
                            categoryId={7}/>
                    </>
                ) : id === 1 ? (
                    <>
                        {/* Render your components for id === 1 */}
                        <ImageItem
                            // key={item.id}
                            title="Teknologi"
                            category="Social Media Design"
                            thumbnail="/assets/images/porto/tech.png"
                            portoId={1}
                            categoryId={1}/>
                        <ImageItem
                            // key={item.id}
                            title="Fashion"
                            category="Social Media Design"
                            thumbnail="/assets/images/porto/fashion.png"
                            portoId={1}
                            categoryId={2}/>
                        <ImageItem
                            // key={item.id}
                            title="F&B"
                            category="Social Media Design"
                            thumbnail="/assets/images/porto/food.png"
                            portoId={1}
                            categoryId={3}/>
                        <ImageItem
                            // key={item.id}
                            title="Furniture"
                            category="Social Media Design"
                            thumbnail="/assets/images/porto/furniture.png"
                            portoId={1}
                            categoryId={4}/>
                        <ImageItem
                            // key={item.id}
                            title="Otomotif"
                            category="Social Media Design"
                            thumbnail="/assets/images/porto/otomotif.png"
                            portoId={1}
                            categoryId={5}/>
                        <ImageItem
                            // key={item.id}
                            title="Sport"
                            category="Social Media Design"
                            thumbnail="/assets/images/porto/sport.png"
                            portoId={1}
                            categoryId={6}/>
                    </>
                ) : id === 3 ? (
                    <>
                        {/* Render your components for id === 3 */}
                        <ImageItem
                            // key={item.id}
                            title="Logo"
                            category="Logo"
                            thumbnail="/assets/images/porto/logo.png"
                            portoId={3}
                            categoryId={7}/>
                    </>
                ) : (
                    // Render a default case if none of the conditions match
                    <></>
                )}
            </div>
        </section>
    )
        ;
}
