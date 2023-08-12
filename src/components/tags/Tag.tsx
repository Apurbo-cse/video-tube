import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { tagReamoved, tagSelected } from "../../features/filter/filterSlice";
interface Tag {
  tag: any;
}

const Tag: React.FC<Tag> = ({tag}) => {

  const dispatch = useDispatch();
  const {tags : selectedTags} = useSelector( (state: any) => state.filter)
  
  const isSelected = selectedTags.includes(tag.title) ? true : false;
  const style = isSelected ? 'bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer' : 'bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer'
  
  const handleClick = () => {
    if(isSelected){
      dispatch(tagReamoved(tag.title));
    }else{
      dispatch(tagSelected(tag.title));
    }
  }

  return (
      <div className={style} onClick={handleClick}>
        {tag.title}
      </div>
  );
};

export default Tag;
