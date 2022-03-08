/**
 * @Author: fanx
 * @Date: 2022年02月15日 11:15
 * @Description: 通用工具类
 */

/**
 * 获取图片方法
 * @param fileName
 */
export const getImgUrl = (fileName: string) => {
  const { href } = new URL(`../assets/img/${fileName}`, import.meta.url);
  return href;
};

/**
 * 获取任意位置图片
 * @param filePath 文件路径
 */
export const getAnyWhereImage = (filePath: string) => {
  const { href } = new URL(filePath, import.meta.url);
  return href;
}

/**
 * 平级结构转树形结构
 *
 * 示例：const jsonDataTree = listTransToTreeData(jsonData, 'id', 'pid', 'chindren');
 * @param list 平级数据列表
 * @param idStr id的字符串
 * @param pidStr 父id字符串
 * @param chindrenStr children的字符串
 */
export const listTransToTreeData = (list: any, idStr: string, pidStr: string, chindrenStr: string) => {
  let r = [], hash: any = {}, id = idStr, pid = pidStr, children = chindrenStr, i = 0, j = 0, len = list.length;
  for (; i < len; i++) {
    hash[list[i][id]] = list[i];
  }
  for (; j < len; j++) {
    let aVal = list[j], hashVP = hash[aVal[pid]];
    if (hashVP) {
      !hashVP[children] && (hashVP[children] = []);
      hashVP[children].push(aVal);
    } else {
      r.push(aVal);
    }
  }
  return r;
}

/**
 * 遍历处理树形结构
 * @param list 树形结构列表
 * @param childName 子节点属性名,一般是children
 * @param func 每个节点要执行的方法
 * @param isOnlyLeaf 是否只在叶子节点执行该方法
 * @param isChildCallBackFn 判断是否有children属性时执行的方法
 */
export function ergodicNodes(list: { [x: string]: any; }[],
                             childName: string | number,
                             func: (arg0: { [x: string]: any; }) => void, isOnlyLeaf: any,
                             isChildCallBackFn: Function) {
  list.forEach((item: { [x: string]: any; }) => {
    if (item[childName] && item[childName].length > 0) {
      isChildCallBackFn(item);
      ergodicNodes(item[childName], childName, func, isOnlyLeaf, isChildCallBackFn);
      if (!isOnlyLeaf) {
        // @ts-ignore
        for (let key in item) {
          func(item)
        }
        return
      }
    } else {
      // @ts-ignore
      for (let key in item) {
        func(item)
      }
      return
    }
  })
  return list;
}
