import React from "react";
import Group from "./Group";

const groups = [
    { src: "/assets/images/profiles/groups_img.jpg", name: "Group 1" },
    { src: "/assets/images/profiles/groups_img.jpg", name: "Group 2" },
    { src: "/assets/images/profiles/groups_img.jpg", name: "Group 3" },
    { src: "/assets/images/profiles/groups_img.jpg", name: "Group 4" },
    { src: "/assets/images/profiles/groups_img.jpg", name: "Group 5" },
    { src: "/assets/images/profiles/groups_img.jpg", name: "Group 6" },
    { src: "/assets/images/profiles/groups_img.jpg", name: "Group 7" },
    { src: "/assets/images/profiles/groups_img.jpg", name: "Group 8" },
    { src: "/assets/images/icons/see-more.png", name: "See more" },
];

function Groups() {
  return (
    <div>
        {groups.map(group => (
            <Group
                key={group.name}
                src={group.src}
                name={group.name}
            />
        ))}
    </div>
    )
}

export default Groups;

