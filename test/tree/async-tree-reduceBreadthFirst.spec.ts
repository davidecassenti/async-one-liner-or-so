import reduceBreadthFirst from '../../dist/tree/async-tree-reduceBreadthFirst'

type TreeNode = {
  id: string;
  children: string[];
}

type Tree = Record<string, TreeNode>

it('reduceBreadthFirst', async () => {
  const tree: Tree = {
    root: {
      id: 'root',
      children: ['node1', 'node2']
    },
    node1: {
      id: 'node1',
      children: ['node3']
    },
    node2: {
      id: 'node2',
      children: ['node4']
    },
    node3: {
      id: 'node3',
      children: ['node5']
    },
    node4: {
      id: 'node4',
      children: []
    },
    node5: {
      id: 'node5',
      children: []
    }
  }

  const reduceBreadthFirstArray = reduceBreadthFirst<TreeNode, TreeNode[]>(
    (accumulator: TreeNode[], node: TreeNode): Promise<TreeNode[]> => {
      return Promise.resolve([...accumulator, node.id] as TreeNode[])
    },
    [],
    node => node.children.map(name => tree[name])
  )

  expect(await reduceBreadthFirstArray(tree.root))
    .toEqual(['root', 'node1', 'node2', 'node3', 'node4', 'node5'])
})

it('reduceBreadthFirst, with circular tree', async () => {
  const nodes: Tree = {
    root: {
      id: 'root',
      children: ['node1', 'node2']
    },
    node1: {
      id: 'node1',
      children: ['node3']
    },
    node2: {
      id: 'node2',
      children: []
    },
    node3: {
      id: 'node3',
      children: ['node4']
    },
    node4: {
      id: 'node4',
      children: ['node1']
    }
  }

  const reduceBreadthFirstArray = reduceBreadthFirst<TreeNode, string[]>(
    (accumulator: string[], node: TreeNode): Promise<string[]> => {
      return Promise.resolve([...accumulator, node.id] as string[])
    },
    [],
    node => node.children.map(name => nodes[name])
  )

  expect(await reduceBreadthFirstArray(nodes.root))
    .toEqual(['root', 'node1', 'node2', 'node3', 'node4'])
})
