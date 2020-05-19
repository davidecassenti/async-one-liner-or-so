import reduceDepthFirst from '../../dist/tree/async-tree-reduceDepthFirst'

type TreeNode = {
  id: string;
  children: string[];
}

type Tree = Record<string, TreeNode>

it('reduceDepthFirst', async () => {
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

  const reduceDepthFirstArray = reduceDepthFirst<TreeNode, string[]>(
    (accumulator: string[], node: TreeNode): Promise<string[]> => {
      return Promise.resolve([...accumulator, node.id] as string[])
    },
    [],
    node => node.children.map(name => tree[name])
  )

  expect(await reduceDepthFirstArray(tree.root))
    .toEqual(['root', 'node1', 'node3', 'node5', 'node2', 'node4'])
})

it('reduceDepthFirst, with circular tree', async () => {
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

  const reduceDepthFirstArray = reduceDepthFirst<TreeNode, string[]>(
    (accumulator: string[], node: TreeNode): Promise<string[]> => {
      return Promise.resolve([...accumulator, node.id] as string[])
    },
    [],
    node => node.children.map(name => nodes[name])
  )

  expect(await reduceDepthFirstArray(nodes.root))
    .toEqual(['root', 'node1', 'node3', 'node4', 'node2'])
})
