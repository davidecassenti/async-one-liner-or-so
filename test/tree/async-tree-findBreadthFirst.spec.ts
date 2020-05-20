import findBreadthFirst from '../../dist/tree/async-tree-findBreadthFirst'

type TreeNode = {
  id: string;
  children: string[];
}

type Tree = Record<string, TreeNode>

const getIdFn = (visited: string[]) => (id: string): string => { visited.push(id); return id }

it('findBreadthFirst', async () => {
  const visited: string[] = []
  const idFn = getIdFn(visited)

  const tree: Tree = {
    root: {
      get id (): string { return idFn('root') },
      children: ['node1', 'node2']
    },
    node1: {
      get id (): string { return idFn('node1') },
      children: ['node3']
    },
    node2: {
      get id (): string { return idFn('node2') },
      children: ['node4']
    },
    node3: {
      get id (): string { return idFn('node3') },
      children: ['node5']
    },
    node4: {
      get id (): string { return idFn('node4') },
      children: []
    },
    node5: {
      get id (): string { return idFn('node5') },
      children: []
    }
  }

  expect(await findBreadthFirst(
    tree.root,
    (node: TreeNode): Promise<boolean> => Promise.resolve(node.id === 'node4'),
    node => node.children.map(name => tree[name])
  )).toEqual(tree.node4)

  expect(visited).toEqual(
    ['root', 'node1', 'node2', 'node3', 'node4']
  )
})

it('findBreadthFirst, with circular tree', async () => {
  const visited: string[] = []
  const idFn = getIdFn(visited)

  const tree: Tree = {
    root: {
      get id (): string { return idFn('root') },
      children: ['node1', 'node2']
    },
    node1: {
      get id (): string { return idFn('node1') },
      children: ['node3']
    },
    node2: {
      get id (): string { return idFn('node2') },
      children: []
    },
    node3: {
      get id (): string { return idFn('node3') },
      children: ['node4']
    },
    node4: {
      get id (): string { return idFn('node4') },
      children: ['node1', 'node5']
    },
    node5: {
      get id (): string { return idFn('node5') },
      children: []
    }
  }

  expect(await findBreadthFirst(
    tree.root,
    (node: TreeNode): Promise<boolean> => Promise.resolve(node.id === 'node5'),
    node => node.children.map(name => tree[name])
  )).toEqual(tree.node5)

  expect(visited).toEqual(
    ['root', 'node1', 'node2', 'node3', 'node4', 'node5']
  )
})

it('findBreadthFirst, when nothing is found', async () => {
  const visited: string[] = []
  const idFn = getIdFn(visited)

  const tree: Tree = {
    root: {
      get id (): string { return idFn('root') },
      children: ['node1', 'node2']
    },
    node1: {
      get id (): string { return idFn('node1') },
      children: ['node3']
    },
    node2: {
      get id (): string { return idFn('node2') },
      children: []
    },
    node3: {
      get id (): string { return idFn('node3') },
      children: ['node4']
    },
    node4: {
      get id (): string { return idFn('node4') },
      children: ['node1', 'node5']
    },
    node5: {
      get id (): string { return idFn('node5') },
      children: []
    }
  }

  expect(await findBreadthFirst(
    tree.root,
    (node: TreeNode): Promise<boolean> => Promise.resolve(node.id === 'noteNotFound'),
    node => node.children.map(name => tree[name])
  )).toEqual(undefined)

  expect(visited).toEqual(
    ['root', 'node1', 'node2', 'node3', 'node4', 'node5']
  )
})
