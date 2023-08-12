import React, { useEffect } from "react";
import Tag from "./Tag";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../../features/tags/tagSlice";


const Tags: React.FC = () => {

  const { tags } = useSelector((sate: any) => sate.tags)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTags() as any);
  }, [dispatch]);

  return tags?.lenght > 0 ? (
    <section>
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
        {tags.map((tag: any) => (
          <Tag key={tag.id} tag={tag} />
        ))}
      </div>
    </section>
  ) : null
};

export default Tags;
