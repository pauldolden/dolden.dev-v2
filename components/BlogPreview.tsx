import { motion } from "framer-motion";
import React, { ForwardedRef, forwardRef } from "react";
import { useInView } from "react-intersection-observer";
import { Article } from "./Article";
import { ProjectCard } from "./ProjectCard";

interface Props {}

const posts = [
  {
    title: "Boost your conversion rate",
    href: "#",
    category: { name: "Article", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "6 min",
    author: {
      name: "Roel Aufderehar",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "How to use search engine optimization to drive sales",
    href: "#",
    category: { name: "Video", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "4 min",
    author: {
      name: "Brenna Goyette",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Improve your customer experience",
    href: "#",
    category: { name: "Case Study", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "11 min",
    author: {
      name: "Daniela Metz",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export const BlogPreview = forwardRef(
  (props: Props, ref: ForwardedRef<any>) => {
    const [inViewRef, inView] = useInView();

    return (
      <>
        <div
          className="w-screen h-2 bg-gradient-to-r from-secondary-400 to-tertiary-400 "
          ref={ref}
        />

        <div
          className="bg-forcefields min-h-[90vh] shadow-inner flex flex-col justify-center"
          ref={inViewRef}
        >
          {inView && (
            <motion.div
              animate={{ opacity: [0, 1] }}
              className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8"
            >
              <div className="sm:flex sm:flex-col sm:align-center">
                <h1 className="text-7xl font-extrabold text-white sm:text-center">
                  Stuff I've Written
                </h1>
                <p className="mt-5 text-xl text-white sm:text-center">
                  In a past life, I was going to be a novelist. Now I write this
                  stuff.
                </p>
              </div>

              <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                {posts.map((post) => (
                  <Article key={post.title} data={post} />
                ))}
              </div>
            </motion.div>
          )}
        </div>
        <div className="w-screen h-2 bg-gradient-to-r from-tertiary-400 to-secondary-400" />
      </>
    );
  }
);
