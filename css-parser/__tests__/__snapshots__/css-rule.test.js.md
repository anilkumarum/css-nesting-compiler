# Snapshot report for `__tests__/css-rule.test.js`

The actual snapshot is saved in `css-rule.test.js.snap`.

Generated by [AVA](https://avajs.dev).

## universalSelector

> Snapshot 1

    {
      cssRules: [
        {
          selector: Uint8Array [
            2a7b2020 2020626f 782d7369 7a696e67 3a20626f 72646572 2d626f78 3b7d
          ],
          type: 1,
        },
      ],
      type: 0,
    }

## tagSelector

> Snapshot 1

    {
      cssRules: [
        {
          declarations: Map {
            Uint8Array [
              68656967 6874
            ] => Uint8Array [
              31303025
            ],
            Uint8Array [
              70616464 696e672d 6c656674
            ] => Uint8Array [
              302e3465 6d
            ],
            Uint8Array [
              636f6c6f 72
            ] => Uint8Array [
              77686974 65
            ],
          },
          selector: Uint8Array [
            646976
          ],
          type: 1,
        },
      ],
      type: 0,
    }

## multiTagSelector

> Snapshot 1

    {
      cssRules: [
        {
          declarations: Map {
            Uint8Array [
              74657874 2d616c69 676e
            ] => Uint8Array [
              63656e74 6572
            ],
          },
          selector: Uint8Array [
            68312c68 32
          ],
          type: 1,
        },
      ],
      type: 0,
    }

## nestedSelfSelector

> Snapshot 1

    {
      cssRules: [
        {
          cssRules: [
            {
              declarations: Map {
                Uint8Array [
                  6261636b 67726f75 6e642d63 6f6c6f72
                ] => Uint8Array [
                  6c696d65 67726565 6e
                ],
              },
              selector: Uint8Array [
                2e737563 63657373
              ],
              type: 1,
            },
          ],
          declarations: Map {
            Uint8Array [
              68656967 6874
            ] => Uint8Array [
              31303025
            ],
            Uint8Array [
              70616464 696e672d 6c656674
            ] => Uint8Array [
              302e3465 6d
            ],
            Uint8Array [
              636f6c6f 72
            ] => Uint8Array [
              77686974 65
            ],
          },
          selector: Uint8Array [
            646976
          ],
          type: 1,
        },
      ],
      type: 0,
    }

## nestedChildSelector

> Snapshot 1

    {
      cssRules: [
        {
          cssRules: [
            {
              declarations: Map {
                Uint8Array [
                  6261636b 67726f75 6e642d63 6f6c6f72
                ] => Uint8Array [
                  6c696d65 67726565 6e
                ],
              },
              selector: Uint8Array [
                202e7375 63636573 73
              ],
              type: 1,
            },
          ],
          declarations: Map {
            Uint8Array [
              68656967 6874
            ] => Uint8Array [
              31303025
            ],
            Uint8Array [
              70616464 696e672d 6c656674
            ] => Uint8Array [
              302e3465 6d
            ],
            Uint8Array [
              636f6c6f 72
            ] => Uint8Array [
              77686974 65
            ],
          },
          selector: Uint8Array [
            646976
          ],
          type: 1,
        },
      ],
      type: 0,
    }

## nestedMultiChildSelector

> Snapshot 1

    {
      cssRules: [
        {
          cssRules: [
            {
              declarations: Map {
                Uint8Array [
                  6261636b 67726f75 6e642d63 6f6c6f72
                ] => Uint8Array [
                  6c696d65 67726565 6e
                ],
              },
              selector: Uint8Array [
                202e7375 63636573 73
              ],
              type: 1,
            },
            {
              declarations: Map {
                Uint8Array [
                  616c6967 6e2d7365 6c66
                ] => Uint8Array [
                  73746172 74
                ],
                Uint8Array [
                  696e6c69 6e652d73 697a65
                ] => Uint8Array [
                  312e3265 6d
                ],
              },
              selector: Uint8Array [
                2b737667
              ],
              type: 1,
            },
          ],
          declarations: Map {
            Uint8Array [
              68656967 6874
            ] => Uint8Array [
              31303025
            ],
            Uint8Array [
              70616464 696e672d 6c656674
            ] => Uint8Array [
              302e3465 6d
            ],
            Uint8Array [
              636f6c6f 72
            ] => Uint8Array [
              77686974 65
            ],
          },
          selector: Uint8Array [
            646976
          ],
          type: 1,
        },
      ],
      type: 0,
    }

## tagAttributeSelector

> Snapshot 1

    {
      cssRules: [
        {
          declarations: Map {
            Uint8Array [
              666f6e74 2d73697a 65
            ] => Uint8Array [
              32656d
            ],
          },
          selector: Uint8Array [
            615b6872 65662a3d 22657861 6d706c65 225d
          ],
          type: 1,
        },
      ],
      type: 0,
    }

## attributeSelector

> Snapshot 1

    {
      cssRules: [
        {
          declarations: Map {
            Uint8Array [
              666f6e74 2d73697a 65
            ] => Uint8Array [
              32656d
            ],
          },
          selector: Uint8Array [
            5b636c61 73737e3d 226c6f67 6f225d
          ],
          type: 1,
        },
      ],
      type: 0,
    }

## multiRuleSelector

> Snapshot 1

    {
      cssRules: [
        {
          declarations: Map {
            Uint8Array [
              68656967 6874
            ] => Uint8Array [
              31303025
            ],
            Uint8Array [
              70616464 696e672d 6c656674
            ] => Uint8Array [
              302e3465 6d
            ],
            Uint8Array [
              636f6c6f 72
            ] => Uint8Array [
              77686974 65
            ],
          },
          selector: Uint8Array [
            646976
          ],
          type: 1,
        },
        {
          declarations: Map {
            Uint8Array [
              74657874 2d616c69 676e
            ] => Uint8Array [
              63656e74 6572
            ],
          },
          selector: Uint8Array [
            68312c68 32
          ],
          type: 1,
        },
      ],
      type: 0,
    }

## deepNestedSelector

> Snapshot 1

    {
      cssRules: [
        {
          cssRules: [
            {
              cssRules: [
                {
                  declarations: Map {
                    Uint8Array [
                      636f6c6f 72
                    ] => Uint8Array [
                      61717561
                    ],
                    Uint8Array [
                      64697370 6c6179
                    ] => Uint8Array [
                      2d776562 6b69742d 626f78
                    ],
                  },
                  selector: Uint8Array [
                    206831
                  ],
                  type: 1,
                },
              ],
              declarations: Map {
                Uint8Array [
                  6261636b 67726f75 6e642d63 6f6c6f72
                ] => Uint8Array [
                  6c696d65 67726565 6e
                ],
              },
              selector: Uint8Array [
                2e737563 63657373
              ],
              type: 1,
            },
            {
              declarations: Map {
                Uint8Array [
                  636f6c6f 72
                ] => Uint8Array [
                  726564
                ],
              },
              selector: Uint8Array [
                20737061 6e
              ],
              type: 1,
            },
          ],
          declarations: Map {
            Uint8Array [
              68656967 6874
            ] => Uint8Array [
              31303025
            ],
            Uint8Array [
              70616464 696e672d 6c656674
            ] => Uint8Array [
              302e3465 6d
            ],
            Uint8Array [
              636f6c6f 72
            ] => Uint8Array [
              77686974 65
            ],
          },
          selector: Uint8Array [
            646976
          ],
          type: 1,
        },
      ],
      type: 0,
    }

## atRuleSelector

> Snapshot 1

    {
      cssRules: [
        {
          cssRules: [
            {
              declarations: Map {
                Uint8Array [
                  7472616e 736c6174 65
                ] => Uint8Array [
                  302030
                ],
              },
              selector: Uint8Array [
                3230252c 20202020 393025
              ],
              type: 1,
            },
          ],
          name: Uint8Array [
            6b657966 72616d65 73207269 6768742d 696e2d6f 7574
          ],
          type: 7,
        },
      ],
      type: 0,
    }

## psuedoClassSelector

> Snapshot 1

    {
      cssRules: [
        {
          declarations: Map {
            Uint8Array [
              6261636b 67726f75 6e642d63 6f6c6f72
            ] => Uint8Array [
              72676261 28302c20 302c2030 2c20302e 303129
            ],
            Uint8Array [
              77696474 68
            ] => Uint8Array [
              327078
            ],
          },
          selector: Uint8Array [
            2a3a3a2d 7765626b 69742d73 63726f6c 6c626172
          ],
          type: 1,
        },
      ],
      type: 0,
    }

## isPsuedoSelector

> Snapshot 1

    {
      cssRules: [
        {
          declarations: Map {
            Uint8Array [
              64697370 6c6179
            ] => Uint8Array [
              666c6578
            ],
            Uint8Array [
              676170
            ] => Uint8Array [
              302e3465 6d
            ],
          },
          selector: Uint8Array [
            3a697328 73686170 652d626f 782c2070 656e2d62 6f782c20 6172726f 772d626f
            782c2063 6f6d6d65 6e742d62 6f7829
          ],
          type: 1,
        },
      ],
      type: 0,
    }

## ruleComment

> Snapshot 1

    {
      cssRules: [
        {
          declarations: Map {
            Uint8Array [
              74657874 2d616c69 676e
            ] => Uint8Array [
              63656e74 6572
            ],
            Uint8Array [
              616c6967 6e2d7365 6c66
            ] => Uint8Array [
              73746172 74
            ],
            Uint8Array [
              696e6c69 6e652d73 697a65
            ] => Uint8Array [
              312e3265 6d
            ],
          },
          selector: Uint8Array [
            6831
          ],
          type: 1,
        },
        {
          declarations: Map {
            Uint8Array [
              76657274 6963616c 2d616c69 676e
            ] => Uint8Array [
              6d696464 6c65
            ],
          },
          selector: Uint8Array [
            7370616e
          ],
          type: 1,
        },
      ],
      type: 0,
    }

## declaratioComment

> Snapshot 1

    {
      cssRules: [
        {
          declarations: Map {
            Uint8Array [
              64697370 6c6179
            ] => Uint8Array [
              696e6c69 6e652d62 6c6f636b
            ],
            Uint8Array [
              6261636b 64726f70 2d66696c 746572
            ] => Uint8Array [
              626c7572 28357078 29
            ],
          },
          selector: Uint8Array [
            646976
          ],
          type: 1,
        },
      ],
      type: 0,
    }
