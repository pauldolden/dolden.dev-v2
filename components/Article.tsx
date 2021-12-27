import React from "react";

interface Props {
  data: any;
}

export const Article = ({ data }: Props) => {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={data.imageUrl} alt="" />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-primary-600">
            <a href={data.category.href} className="hover:underline">
              {data.category.name}
            </a>
          </p>
          <a href={data.href} className="block mt-2">
            <p className="text-xl font-semibold text-gray-900">{data.title}</p>
            <p className="mt-3 text-base text-gray-500">{data.description}</p>
          </a>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <a href={data.author.href}>
              <span className="sr-only">{data.author.name}</span>
              <img
                className="h-10 w-10 rounded-full"
                src="/svg/PD.svg"
                alt=""
              />
            </a>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
              <a href={data.author.href} className="hover:underline">
                Paul Dolden
              </a>
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime={data.datetime}>{data.date}</time>
              <span aria-hidden="true">&middot;</span>
              <span>{data.readingTime} read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
