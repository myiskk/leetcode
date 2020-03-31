/**
 * 将list转变为tree
 */

 let list = [
     {
         id: 1,
     },
     {
         id: 2,
         parentId: 1
     },
     {
         id: 3,
         parentId: 2
     },
    {
        id: 4,
    }
 ]
 let tree = [
     {
         id: 1,
         children: [
             {
                 id:2,
                 parentId: 1,
                 children: [
                     {
                         id: 3,
                         parentId: 2
                     }
                 ]
             }
         ]
     },
     {
         id: 4
     }
 ]

 function transListToTree (list) {
     let resArr = []
     resArr = list.forEach(item => {
        if (item.parentId == undefined) {
            item.children = []
            resArr.push(item)
        }
     })
     console.log(123, resArr)

     function setTree () {

    }

     return resArr
 }

 function translateDataToTree(data) {
    let parents = data.filter(value => value.parentId == 'undefined' || value.parentId == null)
    let childrens = data.filter(value => value.parentId !== 'undefined' && value.parentId != null)
    let translator = (parents, childrens) => {
        parents.forEach((parent) => {
            childrens.forEach((current, index) => {
            if (current.parentId === parent.id) {
                let temp = JSON.parse(JSON.stringify(childrens))
                temp.splice(index, 1)
                translator([current], temp)
                typeof parent.childrens !== 'undefined' 
                ? parent.childrens.push(current) 
                : parent.childrens = [current]
            }
            })
        })
    }

    translator(parents, childrens)
    return parents
  }


 console.log(translateDataToTree(list))