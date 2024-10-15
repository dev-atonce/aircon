"use client";
import { Row } from "antd";
import BlogCard from "./BlogCard";
import AntPagination from "@/components/common/AntPagination/AntPagination";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";

interface BlogSectionProps {
  limit: number;
  typeBlog: string | string[];
  home: boolean;
  lang: string;
  blogPage: boolean;
}

const BlogSection = ({
  limit,
  typeBlog,
  home,
  lang,
  blogPage,
}: BlogSectionProps) => {
  const [page, setPage] = useState(1);
  const [blogList, setBlogList] = useState([]);
  const [total, setTotal] = useState(0);

  const { t } = useTranslation(lang);

  async function blogFetch() {
    const res = await fetch(
      `https://at-once.info/api/blog/c/aircon?type=${typeBlog}&limit=${limit}&skip=${(page - 1) * limit}`
    );
    const data = await res.json();
    setBlogList(data.data);
    setTotal(data.total);
  }

  useEffect(() => {
    blogFetch();
  }, [page]);

  return (
    <>
      {blogPage && (
        <h2 className="text-2xl font-semibold text-slate-800">
          {t("page.blog")}
        </h2>
      )}
      {typeBlog?.includes("job-search") && (
        <h2 className="text-2xl font-semibold text-slate-800">
          {t("page.career")}
        </h2>
      )}
      {!blogList?.length ? (
        <p className="text-center p-10">Coming Soon ...</p>
      ) : (
        <>
          <Row gutter={[16, 16]}>
            <BlogCard data={blogList} type={typeBlog} lang={lang}></BlogCard>
          </Row>
          {!home && (
            <AntPagination
              total={total}
              currentPage={page}
              setCurrentPage={setPage}
              pageSize={limit}
            />
          )}
        </>
      )}
    </>
  );
};

export default BlogSection;
